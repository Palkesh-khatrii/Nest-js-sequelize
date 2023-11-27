import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('product')
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}



  @Post('addProduct')
  async create(@Body() addProduct: CreateProductDto) {
    console.log(addProduct, 'add product')
    return await this.productService.create(addProduct);
  }

  @Get('productList')
  async findAll() {
    return await this.productService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.productService.getProduct(+id);
  }

  @Patch('updateProduct/:id')
  async update(@Param('id') id: string, @Body() updateProductDto: CreateProductDto) {
    return  this.productService.update(+id, updateProductDto);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.productService.remove(+id);
  // }
}
