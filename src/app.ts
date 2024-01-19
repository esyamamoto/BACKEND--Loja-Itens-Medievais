import express from 'express';
import productController from './controller/product.controller'; 
import orderController from './controller/order.controller';
import loginRouter from './router/login.router';

const app = express();

app.use(express.json());
app.use(loginRouter);

// rotas dos produtos-------------------------------------------
app.post('/products', productController.createProductController);
app.get('/products', productController.listProductsController);
//--------------------------------------------------------------
// rotas dos pedidos--------------------------------------------
app.get('/orders', orderController.getOrdersController);
//--------------------------------------------------------------

export default app;
