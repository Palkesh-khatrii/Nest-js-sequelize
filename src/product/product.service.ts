
import { PRODUCT_REPOSITORY } from 'src/core/constants';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { ForbiddenException, HttpException, HttpStatus, Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from 'src/users/user.entity';


@Injectable()
export class ProductService {
  constructor(@Inject(PRODUCT_REPOSITORY) private readonly productRepository: typeof Product) { }

  async create(addProduct: CreateProductDto) {
    console.log(addProduct, 'create')
    try {
      const existingProduct = await this.productRepository.findOne({ where: { prod_name: addProduct.prod_name } })
      if (existingProduct) {
        throw new HttpException('Product already exists', HttpStatus.BAD_REQUEST)
      }
      const product =  await this.productRepository.create(addProduct);
      return {
        statusCode: 201,
        message: 'Product added successfully',
        data: product,
      }
    } catch (error) {
      throw new HttpException(
        {
          statusCode: 401,
          message: error.message,
          data: null,
        },
        HttpStatus.UNAUTHORIZED
      );
    }
  }


  async findAll() {
    try {

      // const productList = await this.productRepository.findAll({});
      const productList = await this.productRepository.findAll({
        include: [{ model: User}],
    });
      console.log(productList, 'product');

      if (productList.length > 0) {
        return {
          statusCode: 200,
          message: 'Product List',
          data: productList,
        };
      } else {
        return {
          statusCode: 404,
          message: 'Product list is empty',
          data: null,
        };
      }
    } catch (error) {
      throw new HttpException(
        {
          statusCode: 500, // Internal Server Error
          message: 'Failed to fetch product list',
          data: null,
        },
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }


  async getProduct(id: number) {
    try {
      const user = await this.productRepository.findOne({ where: { id: id } });
      if (user) {
        return {
          statusCode: 200,
          message: 'find profile successfully',
          data: user,
        }
      }
      else {
        throw new ForbiddenException('No user found');
      }

    } catch (error) {
      throw new HttpException(
        {
          statusCode: 401,
          message: error.message,
          data: null,
        },
        HttpStatus.UNAUTHORIZED
      );
    }


  }
  async update(id: number, updatedProductDto: CreateProductDto) {
    try {
      const product = await this.productRepository.findOne({ where: { id: id } });
      console.log(product, 'update');
  
      if (product) {
        // Object.assign(product, updatedProductDto);
        console.log(product, 'updatedProduct');
  
        // Uncomment the following line to save changes
        // const result = await this.productRepository.update({});
        await this.productRepository.update(updatedProductDto, {
          where: { id: id }
        });
  
        return {
          statusCode: 200,
          message: 'Update product successfully',
          // data: result, // You can include the saved product data in the response if needed
        };
      }
    } catch (error) {
      // Handle errors, log, or return an error response
      console.error('Error updating product:', error);
      return {
        statusCode: 500,
        message: 'Internal server error',
      };
    }
  }
  
//   async update(id: number, updatedProductDto: CreateProductDto) {
//     try {
//       const product = await this.productRepository.findOne({ where:{id:id} });
//       console.log(product, 'update');
//       if (product) {
//         Object.assign(product, updatedProductDto);
//         console.log(product, 'updatedProduct');
//         const result =  await this.productRepository.save(product);
//         return {
//           statusCode: 200,
//           message: 'Update product successfully',
//           // data: result,
//         };
//       }
//     }
//     catch(error) {
//       console.log(error, 'Error updating product');
//     throw new HttpException(
//       {
//         statusCode: 401,
//         message: error.message,
//         data: null,
//       },
//       HttpStatus.UNAUTHORIZED
//     );
//   }
// }



  // async updateProduct(id: number, updateProductDto: CreateProductDto) {
  //   try {
  //     const productToUpdate = await this.productRepository.findOne({ where: { id: id } });

  //     if (!productToUpdate) {
  //       throw new ForbiddenException('No Product found');
  //     }

  //     const updatedProduct = await this.productRepository.save({
  //       ...productToUpdate,
  //       ...updateProductDto,
  //     });


  //     return {
  //       statusCode: 200,
  //       message: 'Update product successfully',
  //       data: updatedProduct,
  //     };
  //   } catch (error) {
  //     console.log('--------------------------------', error);
  //     throw new HttpException(
  //       {
  //         statusCode: 401,
  //         message: error.message,
  //         data: null,
  //       },
  //       HttpStatus.UNAUTHORIZED
  //     );
  //   }
  // }


  // remove(id: number) {
  //   return `This action removes a #${id} product`;
  // }
}
