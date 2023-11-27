import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './entities/product.entity';
export declare class ProductService {
    private readonly productRepository;
    constructor(productRepository: typeof Product);
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
    getProduct(id: number): Promise<{
        statusCode: number;
        message: string;
        data: Product;
    }>;
    update(id: number, updatedProductDto: CreateProductDto): Promise<{
        statusCode: number;
        message: string;
    }>;
}
