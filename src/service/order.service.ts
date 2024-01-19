import { literal } from 'sequelize';
import OrderModel, { OrderSequelizeModel } from '../database/models/order.model';
import { ServiceResponse } from '../types/ServiceResponse';
import ProductModel from '../database/models/product.model';

async function getOrdersService(): Promise<ServiceResponse<OrderSequelizeModel[]>> {
  const findOrders = await OrderModel.findAll({
    include: [{ model: ProductModel, as: 'productIds', foreignKey: 'orderId', attributes: [] }],
    attributes: [
      'id',
      'userId',
      [literal('JSON_ARRAYAGG(productIds.id)'), 'productIds'], // nao entendi
    ],
    raw: true,
    group: ['Order.id'],
  });

  const response: ServiceResponse<OrderSequelizeModel[]> = {
    status: 'SUCCESSFUL',
    data: findOrders,
  };
    
  return response;
}

export default { getOrdersService };
