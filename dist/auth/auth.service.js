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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
const users_service_1 = require("../users/users.service");
let AuthService = class AuthService {
    constructor(userService, jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }
    async create(user) {
        const pass = await this.hashPassword(user.password);
        const newUser = await this.userService.create({ ...user, password: pass });
        const { password, ...result } = newUser['dataValues'];
        return {
            statusCode: 201,
            message: 'signup successful',
            data: result,
        };
    }
    async login(body) {
        try {
            const { email, password } = body;
            const user = await this.userService.findOneByEmail(email);
            let payload = {
                id: user.id,
                email: user.email
            };
            console.log(user, payload, "ffffffffff");
            const token = await this.generateToken(payload);
            if (!user)
                throw new common_1.ForbiddenException('No user found');
            const passwordMatch = await bcrypt.compare(password, user.password);
            if (passwordMatch) {
                return {
                    statusCode: 200,
                    message: 'login successful',
                    data: user,
                    token: token
                };
            }
            else {
                throw new common_1.ForbiddenException('Password mismatch');
            }
        }
        catch (error) {
            console.error('Error occurred while destructuring user.body:', error);
            throw new common_1.HttpException({
                statusCode: 401,
                message: error.message,
                data: null,
            }, common_1.HttpStatus.UNAUTHORIZED);
        }
    }
    async getProfile(id) {
        try {
            const user = await this.userService.findOneById(id);
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
    async validateUser(username, pass) {
        const user = await this.userService.findOneByEmail(username);
        if (!user) {
            return null;
        }
        const match = await this.comparePassword(pass, user.password);
        if (!match) {
            return null;
        }
        const { password, ...result } = user['dataValues'];
        return result;
    }
    async generateToken(user) {
        const token = await this.jwtService.signAsync(user, { expiresIn: '1d' });
        return token;
    }
    async hashPassword(password) {
        const hash = await bcrypt.hash(password, 10);
        return hash;
    }
    async comparePassword(enteredPassword, dbPassword) {
        const match = await bcrypt.compare(enteredPassword, dbPassword);
        return match;
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService, jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map