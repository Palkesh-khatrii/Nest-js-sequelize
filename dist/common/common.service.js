"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
let CommonService = class CommonService {
    async getRandomJoke() {
        try {
            const response = await axios_1.default.get('https://api.chucknorris.io/jokes/random');
            return {
                status: 200,
                message: 'success',
                data: response?.data?.value
            };
        }
        catch (error) {
            console.error('An error occurred while fetching a random joke:', error);
            throw error;
        }
    }
};
exports.CommonService = CommonService;
exports.CommonService = CommonService = __decorate([
    (0, common_1.Injectable)()
], CommonService);
//# sourceMappingURL=common.service.js.map