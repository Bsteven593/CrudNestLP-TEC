import { Test, TestingModule } from '@nestjs/testing';
import { PlacasController } from './placas.controller';
import { PlacasService } from './placas.service';

describe('PlacasController', () => {
  let controller: PlacasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlacasController],
      providers: [PlacasService],
    }).compile();

    controller = module.get<PlacasController>(PlacasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
