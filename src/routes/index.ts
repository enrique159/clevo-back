import express, { Request, Response } from 'express';

import { UserRoutes } from '../app/modules/users/routes.js';

export const Routes = () => {
  const router = express.Router();
  router.use('/users', UserRoutes());
  return router;
}