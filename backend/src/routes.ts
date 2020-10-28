import { Router } from 'express';
import AuthController from './controllers/AuthController';

import OrphanageController from './controllers/OrphanageController';
import UserController from './controllers/UserController';
import authToken from './middlewares/auth-token';
import uploadImages from './middlewares/upload-images';
const routes = Router();


routes.post('/orphanages', uploadImages.array('images'), OrphanageController.create);
routes.get('/orphanages', OrphanageController.index);
routes.get('/orphanages/:id', OrphanageController.show);
routes.put('/orphanages/:id', authToken, OrphanageController.update);
routes.delete('/orphanages/:id', authToken, OrphanageController.delete);

routes.post('/users', UserController.create);
routes.get('/users', UserController.index)
routes.get('/users/:id', UserController.show)

routes.post('/auth', AuthController.create)

export default routes;