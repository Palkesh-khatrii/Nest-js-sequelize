
import { Table, Column, Model, PrimaryKey, AutoIncrement, DataType ,BelongsTo,ForeignKey} from 'sequelize-typescript';
import { User } from 'src/users/user.entity';

@Table
export class Product extends Model<Product> {
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    
    @BelongsTo(() => User, 'userId') // Specify the foreign key as 'userId'
    user: User;

    @ForeignKey(() => User)
    userId: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    prod_name: string;
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    prod_details: string;
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    prod_description: string;
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    prod_price: string;
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    prod_quantity: string;


}

