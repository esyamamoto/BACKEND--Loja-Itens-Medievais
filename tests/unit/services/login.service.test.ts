import { expect } from 'chai';
import sinon from 'sinon';
import loginService from '../../../src/service/login.service';
import loginController from '../../../src/controller/login.controller';
import { ServiceResponse } from '../../../src/types/ServiceResponse';
import loginMock from '../../mocks/loginMock';
import { Token } from '../../../src/types/token';
import { Response, request } from 'express';
import UserModel from '../../../src/database/models/user.model';

describe('LoginService', function () {
  beforeEach(function () { sinon.restore(); });
  it('Verifica se retorna erro de usuário ou senha inválidos', async function () {
    const userWithInvalidCredentials = { username: 'testuser', password: 'testpassword' };
    const findOneStub = sinon.stub(UserModel, 'findOne');
    findOneStub.resolves(null); // nenhum usuário encontrado

    const expectedResult = {
      status: 'UNAUTHORIZED',
      data: { message: 'Username or password invalid' },
    };

    const result = await loginService.login(userWithInvalidCredentials);

    sinon.assert.calledOnce(findOneStub);
    expect(result).to.deep.equal(expectedResult);
  });
});
