import { Table, Column, Model, DataType,HasMany } from 'sequelize-typescript';
import { Product } from 'src/product/entities/product.entity';

@Table
export class User extends Model<User> {
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name: string;
    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false,
    })
    email: string;
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    password: string;

     // Define the association with Product
   
     @HasMany(() => Product)
     products: Product[];

}
