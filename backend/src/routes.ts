import { Router } from 'express';

import OrphanageController from './controllers/OrphanageController';
import uploadImages from './middlewares/upload-images';
const routes = Router();


routes.post('/orphanages', uploadImages.array('images'), OrphanageController.create);
routes.get('/orphanages', OrphanageController.index);
routes.get('/orphanages/:id', OrphanageController.show);

export default routes;