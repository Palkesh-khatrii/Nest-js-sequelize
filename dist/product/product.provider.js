"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productProviders = void 0;
const constants_1 = require("../core/constants");
const product_entity_1 = require("./entities/product.entity");
exports.productProviders = [
    {
        provide: constants_1.PRODUCT_REPOSITORY,
        useValue: product_entity_1.Product,
    },
];
//# sourceMappingURL=product.provider.js.map