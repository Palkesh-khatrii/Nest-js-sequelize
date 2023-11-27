"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Test11Service = void 0;
const common_1 = require("@nestjs/common");
let Test11Service = class Test11Service {
    create(createTest11Dto) {
        return 'This action adds a new test11';
    }
    findAll() {
        return `This action returns all test11`;
    }
    findOne(id) {
        return `This action returns a #${id} test11`;
    }
    update(id, updateTest11Dto) {
        return `This action updates a #${id} test11`;
    }
    remove(id) {
        return `This action removes a #${id} test11`;
    }
};
exports.Test11Service = Test11Service;
exports.Test11Service = Test11Service = __decorate([
    (0, common_1.Injectable)()
], Test11Service);
//# sourceMappingURL=test11.service.js.map