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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const auth_service_1 = require("./auth.service");
const user_dto_1 = require("../users/dto/user.dto");
const doesUserExist_guard_1 = require("../core/guards/doesUserExist.guard");
const swagger_1 = require("@nestjs/swagger");
const common_service_1 = require("../common/common.service");
let AuthController = class AuthController {
    constructor(authService, commonService) {
        this.authService = authService;
        this.commonService = commonService;
    }
    async signUp(req) {
        return await this.authService.create(req);
    }
    async login(req) {
        return await this.authService.login(req);
    }
    getProfileByToken(req) {
        return this.authService.getProfile(req.user.id);
    }
    jokeApi() {
        return this.commonService.getRandomJoke();
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.UseGuards)(doesUserExist_guard_1.DoesUserExist),
    (0, common_1.Post)('api/users/signup'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.UserDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signUp", null);
__decorate([
    (0, common_1.Post)('api/users/login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.LoginDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)("Authorization"),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Get)('api/user/me'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "getProfileByToken", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)("Authorization"),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Get)('random/jock'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "jokeApi", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)(''),
    (0, swagger_1.ApiTags)("user"),
    __metadata("design:paramtypes", [auth_service_1.AuthService, common_service_1.CommonService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map