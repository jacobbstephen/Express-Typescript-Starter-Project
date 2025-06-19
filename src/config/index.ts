// This file contains all the basic configuration logic for app server to work

import dotenv from 'dotenv';

dotenv.config();

type ServerConfig = {
    PORT: number,
}
console.log('Environment variables loaded');

export const serverConfig: ServerConfig = {
    PORT: Number(process.env.PORT) || 3002
};