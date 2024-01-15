import { Test, TestingModule } from '@nestjs/testing';
import { MiceService } from './mice.service';

describe('MiceService', () => {
  let service: MiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MiceService],
    }).compile();

    service = module.get<MiceService>(MiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
