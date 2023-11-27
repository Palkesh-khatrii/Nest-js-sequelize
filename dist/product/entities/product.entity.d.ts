import { Model } from 'sequelize-typescript';
import { User } from 'src/users/user.entity';
export declare class Product extends Model<Product> {
    id: number;
    user: User;
    userId: number;
    prod_name: string;
    prod_details: string;
    prod_description: string;
    prod_price: string;
    prod_quantity: string;
}
