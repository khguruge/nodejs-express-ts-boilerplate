import { Router } from 'express';
import * as apiControllers from '../controllers/api.controller';
import { validateBody } from '../middleware/validate-body.middleware';
import { validateQuery } from '../middleware/validate-query.middleware';
import { apiSchema } from '../schema/api.schema';
const apiRoutes = Router();

apiRoutes.get('/', apiControllers.getAPI);
apiRoutes.post('/', validateQuery(apiSchema), validateBody(apiSchema), apiControllers.getAPI);

export default apiRoutes;
