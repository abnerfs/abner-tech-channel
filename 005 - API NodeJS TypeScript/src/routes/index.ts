import { Application } from "express";
import Router from 'express';
import { productRouter } from "./products";

export const useRoutes = (app: Application) => {
    const apiRouter = Router();
    apiRouter.use('/products', productRouter);

    app.use('/api/v1', apiRouter);
}


