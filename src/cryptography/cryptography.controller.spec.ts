import { Test, TestingModule } from '@nestjs/testing';
import { CryptographyController } from './cryptography.controller';

describe('CryptographyController', () => {
  let controller: CryptographyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CryptographyController],
    }).compile();

    controller = module.get<CryptographyController>(CryptographyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
