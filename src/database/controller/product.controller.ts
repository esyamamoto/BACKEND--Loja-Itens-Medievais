import { Request, Response } from 'express';
import productService from '../service/product.service';

// criar produto ---------------------------------------------------------------------------------------
async function createProductController(req: Request, res: Response): Promise<Response> {
  try {
    const { name, price, orderId } = req.body;

    if (!name || !price || !orderId) {
      return res.status(400)
        .json({ message: 'Dados inválidos. Precisa de nome, preço e orderId.' });
    }

    const newProduct = await productService.createProductService({ name, price, orderId });
    return res.status(201).json(newProduct);
  } catch (error) {
    console.error('Erro ao criar produto:', error);
    return res.status(500).json({ message: 'Erro interno do servidor ao criar produto.' });
  }
}
// listar produto ---------------------------------------------------------------------------------------
async function listProductsController(req: Request, res: Response): Promise<void> {
  try {
    const response = await productService.listProductsService();
    res.status(200).json(response);
  } catch (error) {
    console.error('Erro ao listar produtos:', error);
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
}

export default {
  createProductController,
  listProductsController,
};