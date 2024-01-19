import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import productsController from '../../../src/controller/product.controller';
import productService from '../../../src/service/product.service';

chai.use(sinonChai);

describe('ProductsController', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });

  describe('createProductController', function () {
    it('Verifica se cria um novo produto com sucesso', async function () {
      const productServiceStub = sinon.stub(productService, 'createProductService');
      const expectedProduct = { id: 1, name: 'Produto Criado', price: '20 moedas de ouro', orderId: 1 };
      productServiceStub.resolves(expectedProduct);

      req.body = { name: 'Produto Criado', price: '20 moedas de ouro', orderId: 1 };
      await productsController.createProductController(req, res);

      sinon.assert.calledOnce(productServiceStub);
      expect(res.status).to.have.been.calledWith(201);
      expect(res.json).to.have.been.calledWith(expectedProduct);
    });

    it('Verifica se retorna status 400 ao criar produto com dados inválidos', async function () {
      req.body = {};
      await productsController.createProductController(req, res);

      expect(res.status).to.have.been.calledWith(400);
      expect(res.json).to.have.been.calledWith({ message: 'Dados inválidos. Precisa de nome, preço e orderId.' });
    });
  });

  describe('listProductsController', function () {
    it('Verifica se retorna status 500 ao listar produtos', async function () {
      const productServiceStub = sinon.stub(productService, 'listProductsService');
      productServiceStub.rejects(new Error('Erro ao criar produto. Verifique os dados e tente novamente.'));

      await productsController.listProductsController(req, res);

      sinon.assert.calledOnce(productServiceStub);
      expect(res.status).to.have.been.calledWith(500);
      expect(res.json).to.have.been.calledWith({ message: 'Erro ao criar produto. Verifique os dados e tente novamente.' });
    });
  });
});
