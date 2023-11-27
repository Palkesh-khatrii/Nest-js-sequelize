import { AuthService } from './auth.service';
import { LoginDto, UserDto } from '../users/dto/user.dto';
import { CommonService } from 'src/common/common.service';
export declare class AuthController {
    private authService;
    private commonService;
    constructor(authService: AuthService, commonService: CommonService);
    signUp(req: UserDto): Promise<{
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
    login(req: LoginDto): Promise<{
        statusCode: number;
        message: string;
        data: import("../users/user.entity").User;
        token: string;
    }>;
    getProfileByToken(req: any): Promise<{
        statusCode: number;
        message: string;
        data: import("../users/user.entity").User;
    }>;
    jokeApi(): Promise<{
        status: number;
        message: string;
        data: any;
    }>;
}
