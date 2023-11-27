import { Model } from 'sequelize-typescript';
import { Product } from 'src/product/entities/product.entity';
export declare class User extends Model<User> {
    name: string;
    email: string;
    password: string;
    products: Product[];
}
