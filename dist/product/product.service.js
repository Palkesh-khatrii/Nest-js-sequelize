"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const constants_1 = require("../core/constants");
const common_1 = require("@nestjs/common");
const user_entity_1 = require("../users/user.entity");
let ProductService = class ProductService {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }
    async create(addProduct) {
        console.log(addProduct, 'create');
        try {
            const existingProduct = await this.productRepository.findOne({ where: { prod_name: addProduct.prod_name } });
            if (existingProduct) {
                throw new common_1.HttpException('Product already exists', common_1.HttpStatus.BAD_REQUEST);
            }
            const product = await this.productRepository.create(addProduct);
            return {
                statusCode: 201,
                message: 'Product added successfully',
                data: product,
            };
        }
        catch (error) {
            throw new common_1.HttpException({
                statusCode: 401,
                message: error.message,
                data: null,
            }, common_1.HttpStatus.UNAUTHORIZED);
        }
    }
    async findAll() {
        try {
            const productList = await this.productRepository.findAll({
                include: [{ model: user_entity_1.User }],
            });
            console.log(productList, 'product');
            if (productList.length > 0) {
                return {
                    statusCode: 200,
                    message: 'Product List',
                    data: productList,
                };
            }
            else {
                return {
                    statusCode: 404,
                    message: 'Product list is empty',
                    data: null,
                };
            }
        }
        catch (error) {
            throw new common_1.HttpException({
                statusCode: 500,
                message: 'Failed to fetch product list',
                data: null,
            }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getProduct(id) {
        try {
            const user = await this.productRepository.findOne({ where: { id: id } });
            if (user) {
                return {
                    statusCode: 200,
                    message: 'find profile successfully',
                    data: user,
                };
            }
            else {
                throw new common_1.ForbiddenException('No user found');
            }
        }
        catch (error) {
            throw new common_1.HttpException({
                statusCode: 401,
                message: error.message,
                data: null,
            }, common_1.HttpStatus.UNAUTHORIZED);
        }
    }
    async update(id, updatedProductDto) {
        try {
            const product = await this.productRepository.findOne({ where: { id: id } });
            console.log(product, 'update');
            if (product) {
                console.log(product, 'updatedProduct');
                await this.productRepository.update(updatedProductDto, {
                    where: { id: id }
                });
                return {
                    statusCode: 200,
                    message: 'Update product successfully',
                };
            }
        }
        catch (error) {
            console.error('Error updating product:', error);
            return {
                statusCode: 500,
                message: 'Internal server error',
            };
        }
    }
};
exports.ProductService = ProductService;
exports.ProductService = ProductService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(constants_1.PRODUCT_REPOSITORY)),
    __metadata("design:paramtypes", [Object])
], ProductService);
//# sourceMappingURL=product.service.js.map