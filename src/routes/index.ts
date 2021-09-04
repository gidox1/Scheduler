import organizationRoute  from './organization';
import adminRoute from './admin';
import branchRoute from './branch';
import schedulerRoute from './scheduler';
import userRoute from './users';
import { Express } from 'express'

//mount all routes
export default (app: Express) => {
  organizationRoute(app);
  adminRoute(app);
  branchRoute(app);
  schedulerRoute(app);
  userRoute(app);
}