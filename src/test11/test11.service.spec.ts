import { Test, TestingModule } from '@nestjs/testing';
import { Test11Service } from './test11.service';

describe('Test11Service', () => {
  let service: Test11Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Test11Service],
    }).compile();

    service = module.get<Test11Service>(Test11Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
