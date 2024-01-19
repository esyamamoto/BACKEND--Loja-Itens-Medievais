import bcrypt from 'bcryptjs';
import { ServiceResponse } from '../types/ServiceResponse';
import { Token } from '../types/token';
import jwt from '../utils/jwt.util';
import UserModel from '../database/models/user.model';
import { Login } from '../types/login';

async function login(user: Login): Promise<ServiceResponse<Token>> {
  if (!user.username || !user.password) {
    return {
      status: 'INVALID_DATA',
      data: { message: '"username" and "password" are required' },
    };
  }
  const userFind = await UserModel.findOne({ where: { username: user.username } });

  if (!userFind || !bcrypt.compareSync(user.password, userFind.dataValues.password)) {
    return {
      status: 'UNAUTHORIZED',
      data: { message: 'Username or password invalid' },
    };
  }
  // Extrai as informações do usuário e cria um token JWT
  const { id, username } = userFind.dataValues;
  const token = jwt.sign({ id, username });
  return { status: 'SUCCESSFUL', data: { token },
  };
}

export default {
  login,
};
