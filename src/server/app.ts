import dotenv from 'dotenv';
dotenv.config();
import express from 'express';

import init from './bootup/init';

const app = express();
init(app);

export default app;
