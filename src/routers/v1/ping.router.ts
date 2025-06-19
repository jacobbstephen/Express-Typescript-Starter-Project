import express from 'express'

import { pingHandler } from '../../controller/ping.controller';

const pingRouter = express.Router();
pingRouter.use('/:id/comments', pingHandler);

export default pingRouter;