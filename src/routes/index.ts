import { Router } from 'express';
import apiRoutes from './api.routes';
import commonRoutes from './common.routes';

const router = Router();

router.use('/api', apiRoutes);
router.use(commonRoutes);

export default router;
