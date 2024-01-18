import ProductModel, { 
  ProductInputtableTypes, 
  ProductSequelizeModel,
} from '../models/product.model';

// criar produto ---------------------------------------------------------------------------------------
async function createProductService(Products: 
ProductInputtableTypes): Promise<ProductInputtableTypes> {
  try {
    const newProduct = await ProductModel.create(Products);
    return newProduct.dataValues;
  } catch (error) {
    console.error('Erro ao criar produto:', error);
    throw new Error('Erro ao criar produto. Verifique os dados e tente novamente.');
  }
}
// listar produto ---------------------------------------------------------------------------------------
async function listProductsService(): Promise<ProductSequelizeModel[]> {
  try {
    const response = await ProductModel.findAll();
    return response;
  } catch (error) {
    console.error('Erro ao listar produtos:', error);
    throw new Error('Erro ao listar produtos. Tente novamente mais tarde.');
  }
}
export default {
  createProductService,
  listProductsService,
};
