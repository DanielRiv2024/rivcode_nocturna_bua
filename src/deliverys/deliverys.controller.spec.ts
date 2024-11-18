import { Test, TestingModule } from '@nestjs/testing';
import { DeliverysController } from './deliverys.controller';

describe('DeliverysController', () => {
  let controller: DeliverysController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeliverysController],
    }).compile();

    controller = module.get<DeliverysController>(DeliverysController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
