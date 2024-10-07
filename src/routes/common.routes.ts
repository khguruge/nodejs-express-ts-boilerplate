import { Router } from 'express';
import commonController from '../controllers/common.controller';

const commonRoutes = Router();

commonRoutes.get('/', commonController.healthCheck);

commonRoutes.all('*', commonController.fallback);

export default commonRoutes;
