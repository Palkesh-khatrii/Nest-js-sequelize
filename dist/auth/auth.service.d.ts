import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { LoginDto, UserDto } from 'src/users/dto/user.dto';
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    constructor(userService: UsersService, jwtService: JwtService);
    create(user: UserDto): Promise<{
        statusCode: number;
        message: string;
        data: {
            name: string;
            email: string;
            products: import("../product/entities/product.entity").Product[];
            id?: any;
            createdAt?: any;
            updatedAt?: any;
            deletedAt?: any;
            version?: any;
            _attributes: import("../users/user.entity").User;
            dataValues: import("../users/user.entity").User;
            _creationAttributes: import("../users/user.entity").User;
            isNewRecord: boolean;
            sequelize: import("sequelize").Sequelize;
            _model: import("sequelize").Model<import("../users/user.entity").User, import("../users/user.entity").User>;
        };
    }>;
    login(body: LoginDto): Promise<{
        statusCode: number;
        message: string;
        data: import("../users/user.entity").User;
        token: string;
    }>;
    getProfile(id: number): Promise<{
        statusCode: number;
        message: string;
        data: import("../users/user.entity").User;
    }>;
    validateUser(username: string, pass: string): Promise<{
        name: string;
        email: string;
        products: import("../product/entities/product.entity").Product[];
        id?: any;
        createdAt?: any;
        updatedAt?: any;
        deletedAt?: any;
        version?: any;
        _attributes: import("../users/user.entity").User;
        dataValues: import("../users/user.entity").User;
        _creationAttributes: import("../users/user.entity").User;
        isNewRecord: boolean;
        sequelize: import("sequelize").Sequelize;
        _model: import("sequelize").Model<import("../users/user.entity").User, import("../users/user.entity").User>;
    }>;
    generateToken(user: any): Promise<string>;
    private hashPassword;
    private comparePassword;
}
