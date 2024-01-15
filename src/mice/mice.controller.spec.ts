import { Test, TestingModule } from '@nestjs/testing';
import { MiceController } from './mice.controller';

describe('MiceController', () => {
  let controller: MiceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MiceController],
    }).compile();

    controller = module.get<MiceController>(MiceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
