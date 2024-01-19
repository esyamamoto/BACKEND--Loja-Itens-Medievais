import chai, { expect } from 'chai';
import sinon from 'sinon';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import ProductModel from '../../../src/database/models/product.model';

chai.use(chaiHttp);

const products01 = [
  {
    id: 1,
    name: "Excalibur",
    price: "10 peças de ouro",
    orderId: 1
  },
];

describe('ProductsService', function () {
  beforeEach(function () { sinon.restore(); });
  it('Verifica se lista o produto', async function () {
  
      const findAllStub = sinon.stub(ProductModel, 'findAll');
  
      findAllStub.resolves(products01.map(product => ProductModel.build(product)));
  
      const response = await chai.request(app).get('/products');
      expect(response).to.have.status(200);
      expect(response.body).to.deep.equal(products01);
  
  })
  it('Verifica se cria um novo produto', async function () {
    const newProduct = ProductModel.build({
      name: 'Faca Bowie | Doppler Gama (Emerald)',
      price: '8000 moedas de ouro',
      orderId: 7,
    });
    sinon.stub(ProductModel, 'create').resolves(newProduct);
  
    const ServiceResponse = await chai
        .request(app)
        .post('/products')
        .send({
          name: 'Faca Bowie | Doppler Gama (Emerald)',
          price: '8000 moedas de ouro',
          orderId: 7,
        });
  
      expect(ServiceResponse.status).to.equal(201);
    });
    it('Verifica se retorna um erro ao criar um produto com dados inválidos', async function () {
      const invalidProductData = {
        // dados inválidos pq ta sem orderId, precisa dos 3 dados
        name: 'Name pra dar Inválido',
        price: '101 moedas de ouro',
      };
  
      const ServiceResponse = await chai
        .request(app)
        .post('/products')
        .send(invalidProductData);
  
      expect(ServiceResponse.status).to.equal(400);
      expect(ServiceResponse.body.message).to.equal('Dados inválidos. Precisa de nome, preço e orderId.');
    });
  
    it('Verifica se retorna um erro ao listar produtos com falha no service', async function () {
      const findAllStub = sinon.stub(ProductModel, 'findAll');
      findAllStub.rejects(new Error('Erro ao listar produtos'));
  
      const response = await chai.request(app).get('/products');
  
      expect(response).to.have.status(500);
      expect(response.body.message).to.equal('Erro ao criar produto. Verifique os dados e tente novamente.');
    });
});