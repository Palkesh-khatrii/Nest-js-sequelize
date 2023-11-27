import { Module } from '@nestjs/common';
import { Test11Service } from './test11.service';
import { Test11Controller } from './test11.controller';

@Module({
  controllers: [Test11Controller],
  providers: [Test11Service],
})
export class Test11Module {}
