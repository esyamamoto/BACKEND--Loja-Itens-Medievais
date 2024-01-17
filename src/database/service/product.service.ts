import ProductModel, { 
  ProductInputtableTypes, 
  ProductSequelizeModel,
} from '../models/product.model';

// criar produto ---------------------------------------------------------------------------------------
async function createProductService(Products: 
ProductInputtableTypes): Promise<ProductInputtableTypes> {
  const newProduct = await ProductModel.create(Products);
  return newProduct.dataValues;
}

// listar produto ---------------------------------------------------------------------------------------
async function listProductsService(): Promise<ProductSequelizeModel[]> {
  const response = await ProductModel.findAll();
  return response;
}

export default {
  createProductService,
  listProductsService,
};
