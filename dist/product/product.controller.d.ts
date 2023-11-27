import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './entities/product.entity';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    create(addProduct: CreateProductDto): Promise<{
        statusCode: number;
        message: string;
        data: Product;
    }>;
    findAll(): Promise<{
        statusCode: number;
        message: string;
        data: Product[];
    }>;
    findOne(id: number): Promise<{
        statusCode: number;
        message: string;
        data: Product;
    }>;
    update(id: string, updateProductDto: CreateProductDto): Promise<{
        statusCode: number;
        message: string;
    }>;
}
