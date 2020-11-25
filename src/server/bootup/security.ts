import { Express } from 'express';
import helmet from 'helmet';
import cors from 'cors';
const security = (app: Express) => {
  app.use(
    helmet({
      contentSecurityPolicy: false
    })
  );

  app.use(cors());
};
export default security;
