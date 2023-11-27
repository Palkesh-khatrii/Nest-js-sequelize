import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Test11Service } from './test11.service';
import { CreateTest11Dto } from './dto/create-test11.dto';
import { UpdateTest11Dto } from './dto/update-test11.dto';

@Controller('test11')
export class Test11Controller {
  constructor(private readonly test11Service: Test11Service) {}

  @Post()
  create(@Body() createTest11Dto: CreateTest11Dto) {
    return this.test11Service.create(createTest11Dto);
  }

  @Get()
  findAll() {
    return this.test11Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.test11Service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTest11Dto: UpdateTest11Dto) {
    return this.test11Service.update(+id, updateTest11Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.test11Service.remove(+id);
  }
}
