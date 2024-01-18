import { Response, Request } from 'express';
import OrderService from '../service/order.service';

const getOrdersController = async (_req: Request, res: Response): Promise<Response> => {
  try {
    const orders = await OrderService.getOrdersService();
    return res.status(200).json(orders.data);
  } catch (error) {
    console.error('Erro ao buscar pedidos com produtos:', error);
    return res.status(500).json({ message: 'Erro ao buscar pedidos com produtos.' });
  }
};

export default { getOrdersController };
