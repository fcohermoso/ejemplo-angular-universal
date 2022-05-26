import { Router } from 'express';
import AuthController from '../controllers/auth'
import DatosController from '../controllers/datos'

const apiRouter = Router();

apiRouter.post('/login', AuthController.login);
apiRouter.post('/datos', DatosController.getDatos);

export default apiRouter;
