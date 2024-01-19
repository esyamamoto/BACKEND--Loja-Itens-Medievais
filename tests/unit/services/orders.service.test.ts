import { expect } from 'chai';
import sinon from 'sinon';
import OrderModel from '../../../src/database/models/order.model';
import orderService from '../../../src/service/order.service';

describe('OrdersService', function () {
  beforeEach(function () { sinon.restore(); });

  it('Deve retornar uma resposta vazia se não houver pedidos', async function () {
    const findAllStub = sinon.stub(OrderModel, 'findAll');
    findAllStub.resolves([]);

    const response = await orderService.getOrdersService();

    expect(response.status).to.equal('SUCCESSFUL');
    expect(response.data).to.deep.equal([]);
    sinon.assert.calledOnce(findAllStub);
  });
});
