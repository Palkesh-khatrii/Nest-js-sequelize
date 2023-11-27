import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './core/database/database.module';
import { AuthModule } from './auth/auth.module';
import { CommonService } from './common/common.service';
import { Test11Module } from './test11/test11.module';
import { ProductModule } from './product/product.module';


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    UsersModule,
    AuthModule,
    UsersModule,
    Test11Module,
    ProductModule,
  ],
  controllers: [AppController],
  providers: [AppService, CommonService,],
})
export class AppModule { }

