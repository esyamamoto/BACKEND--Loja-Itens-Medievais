import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import productService from '../../../src/database/service/product.service';
import app from '../../../src/app';

chai.use(chaiHttp);

describe('POST /products', function () { 
  beforeEach(function () { 
    sinon.restore(); 
  });
});

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
});


