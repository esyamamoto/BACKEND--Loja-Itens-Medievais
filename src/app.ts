import express from 'express';
import productController from './database/controller/product.controller'; 
import orderController from './database/controller/order.controller';

const app = express();

app.use(express.json());
// rotas dos produtos-------------------------------------------
app.post('/products', productController.createProductController);
app.get('/products', productController.listProductsController);
//--------------------------------------------------------------
// rotas dos pedidos--------------------------------------------
app.get('/orders', orderController.getOrdersController);
//--------------------------------------------------------------

export default app;
