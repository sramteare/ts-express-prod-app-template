import { Router } from 'express';
import exampleRoute from './exampleRoute';

const router = Router();

router.use('/api/v1/example', exampleRoute);

export default router;
