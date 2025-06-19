// this file shows how to use the mergeParams so that child routers can access the varible part of the url from the parent router

import express from 'express';
import { pingHandler } from '../../controller/ping.controller';
const xyzRouter = express.Router({mergeParams: true});
xyzRouter.get('/', pingHandler);
export default xyzRouter;