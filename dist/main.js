"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe());
    let port = process.env.PORT || 5001;
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Test')
        .setDescription('Test API description')
        .setVersion('1.0')
        .addTag('Test')
        .addBearerAuth(undefined, 'Authorization')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(port);
}
bootstrap();
//# sourceMappingURL=main.js.map