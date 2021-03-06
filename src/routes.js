import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import CoordController from './app/controllers/CoordController';
import StudentController from './app/controllers/StudentController';
import CompanyController from './app/controllers/CompanyController';
import ContractController from './app/controllers/ContractController';
import ApprovalController from './app/controllers/ApprovalController';
import CalendarController from './app/controllers/CalendarController';
import ScanController from './app/controllers/ScanController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);

routes.post('/sessions', SessionController.store);

routes.post('/students', StudentController.store);
routes.get('/students', StudentController.index);

routes.post('/files', upload.single('file'), FileController.store);

routes.post('/companies', CompanyController.store);
routes.get('/companies', CompanyController.index);

routes.post('/contracts', ContractController.store);
routes.put('/contracts/:id', ContractController.update);
routes.get('/contracts', ContractController.index);
routes.get('/contracts/scan', ScanController.index);

routes.get('/calendars', CalendarController.index);

// -----------------------------------------------------------------------------
routes.use(authMiddleware);
// -----------------------------------------------------------------------------

routes.put('/users', UserController.update);

routes.get('/coordinators', CoordController.index);

routes.put('/approvals/:id', ApprovalController.update);

routes.post('/calendars', CalendarController.store);
routes.put('/calendars/:id', CalendarController.update);

export default routes;
