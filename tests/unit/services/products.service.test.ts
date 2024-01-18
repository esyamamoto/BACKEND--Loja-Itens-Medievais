import { expect } from 'chai';
import sinon from 'sinon';

describe('ProductsService', function () {
  beforeEach(function () { sinon.restore(); });

});
/*
it('Verifica se cria um novo produto', async () => {
  const createProduct = sinon.stub(productService, 'createProduct');
  
  const productMock = {
    id: 6,
    name: 'Martelo de Thor',
    price: '30 peças de ouro',
    orderId: 4,
  };

  const productData = {
    name: 'Martelo de Thor',
    price: '30 peças de ouro',
    orderId: 4,
  };

 createProduct.withArgs(productData).resolves(productMock);
 const response = await chai.request(app).post('/products').send(productData);

  expect(response.status).to.be.equal(201);
  expect(response.body).to.be.deep.equal(productMock);

  sinon.assert.calledOnce(createProduct);

  */