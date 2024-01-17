import express from 'express';
import productController from './database/controller/product.controller'; 

const app = express();

app.use(express.json());
// rotas dos produtos-------------------------------------------
app.post('/products', productController.createProductController);
app.get('/products', productController.listProductsController);
//--------------------------------------------------------------
// rotas dos pedidos--------------------------------------------

//--------------------------------------------------------------

export default app;
