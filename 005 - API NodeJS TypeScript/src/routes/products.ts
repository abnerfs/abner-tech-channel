import { Router } from 'express';
import { productController } from '../controllers/products';

const productRouter = Router();
productRouter.get('/', productController.listProducts);
productRouter.get('/:id', productController.getProduct);
productRouter.post('/', productController.insertProduct);
productRouter.put('/:id', productController.updateProduct);
productRouter.delete('/:id', productController.deleteProduct);

export { 
    productRouter,
}

