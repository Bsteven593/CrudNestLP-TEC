import { Test, TestingModule } from '@nestjs/testing';
import { PlacasService } from './placas.service';

describe('PlacasService', () => {
  let service: PlacasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlacasService],
    }).compile();

    service = module.get<PlacasService>(PlacasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
