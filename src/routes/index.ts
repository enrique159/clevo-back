import express, { Request, Response } from 'express';

import { UserRoutes } from '../app/modules/users/routes.js';
import { AuthRoutes } from '../app/auth/router.js';

export const Routes = () => {
  const router = express.Router();
  router.use('/users', UserRoutes());
  router.use('/auth', AuthRoutes());
  return router;
}