import { Test, TestingModule } from '@nestjs/testing';
import { Test11Controller } from './test11.controller';
import { Test11Service } from './test11.service';

describe('Test11Controller', () => {
  let controller: Test11Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Test11Controller],
      providers: [Test11Service],
    }).compile();

    controller = module.get<Test11Controller>(Test11Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
