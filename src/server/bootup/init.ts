import express, { NextFunction, Request, Response, Express } from 'express';
import path from 'path';
import i18n from 'i18n';
import cookieParser from 'cookie-parser';
import 'express-async-errors';
import router from '../routes/routes';
import security from './security';

import { rateLimiter } from './ratelimit';

import StatusCodes from 'http-status-codes';
const { NOT_FOUND, INTERNAL_SERVER_ERROR } = StatusCodes;
const PROP_CONTENT_TYPE = 'Content-Type';
const APP_JSON = 'application/json';

const defaults = (app: Express) => {
  /** localization */
  i18n.configure({
    locales: ['en'],
    directory: path.join(__dirname, '../../locales')
  });
  // cookies
  app.use(cookieParser());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  /** content type application/json */
  app.use((req: Request, res: Response, next: NextFunction) => {
    res.setHeader(PROP_CONTENT_TYPE, APP_JSON);
    next();
  });
};
const init = (app: Express): void => {
  defaults(app);
  security(app);
  /** rate limit and speedlimit */
  app.use(rateLimiter);
  //TODO auth using JWT and logging
  app.use('/', router);

  /** default error handlers */
  app.use(
    (
      err: Error,
      req: Request,
      res: Response,
      // do not remove required
      next: NextFunction // eslint-disable-line
    ) => {
      return res.status(INTERNAL_SERVER_ERROR).json({
        error: err.message
      });
    }
  );

  // catch 404 and forward to error handler
  app.use((req: Request, resp: Response) => {
    resp.status(NOT_FOUND).send(null);
  });
};
export default init;
