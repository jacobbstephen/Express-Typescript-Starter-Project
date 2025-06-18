import express from 'express'
import {serverConfig} from './config';
import pingRouter from './routers/v1/ping.router';
import v1Router from './routers/v1/index.router';

const app = express();

app.use(pingRouter);
app.use('/api/v1', v1Router);


app.listen(serverConfig.PORT, () => {
    console.log(`Server is running on ${serverConfig.PORT}`);
    
});
