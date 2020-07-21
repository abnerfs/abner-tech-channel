import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import { useRoutes } from './routes';
import bodyParser from 'body-parser';

const PORT = process.env.PORT || 8091;

const app = express();
app.use(bodyParser.json());
useRoutes(app);


app.listen(PORT, () => console.log('Servidor iniciado na porta ' + PORT));