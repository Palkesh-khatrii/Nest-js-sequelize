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
exports.Test11Controller = void 0;
const common_1 = require("@nestjs/common");
const test11_service_1 = require("./test11.service");
const create_test11_dto_1 = require("./dto/create-test11.dto");
const update_test11_dto_1 = require("./dto/update-test11.dto");
let Test11Controller = class Test11Controller {
    constructor(test11Service) {
        this.test11Service = test11Service;
    }
    create(createTest11Dto) {
        return this.test11Service.create(createTest11Dto);
    }
    findAll() {
        return this.test11Service.findAll();
    }
    findOne(id) {
        return this.test11Service.findOne(+id);
    }
    update(id, updateTest11Dto) {
        return this.test11Service.update(+id, updateTest11Dto);
    }
    remove(id) {
        return this.test11Service.remove(+id);
    }
};
exports.Test11Controller = Test11Controller;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_test11_dto_1.CreateTest11Dto]),
    __metadata("design:returntype", void 0)
], Test11Controller.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Test11Controller.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], Test11Controller.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_test11_dto_1.UpdateTest11Dto]),
    __metadata("design:returntype", void 0)
], Test11Controller.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], Test11Controller.prototype, "remove", null);
exports.Test11Controller = Test11Controller = __decorate([
    (0, common_1.Controller)('test11'),
    __metadata("design:paramtypes", [test11_service_1.Test11Service])
], Test11Controller);
//# sourceMappingURL=test11.controller.js.map