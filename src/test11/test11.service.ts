import { Injectable } from '@nestjs/common';
import { CreateTest11Dto } from './dto/create-test11.dto';
import { UpdateTest11Dto } from './dto/update-test11.dto';

@Injectable()
export class Test11Service {
  create(createTest11Dto: CreateTest11Dto) {
    return 'This action adds a new test11';
  }

  findAll() {
    return `This action returns all test11`;
  }

  findOne(id: number) {
    return `This action returns a #${id} test11`;
  }

  update(id: number, updateTest11Dto: UpdateTest11Dto) {
    return `This action updates a #${id} test11`;
  }

  remove(id: number) {
    return `This action removes a #${id} test11`;
  }
}
