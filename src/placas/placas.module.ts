import { Module } from '@nestjs/common';
import { PlacasService } from './placas.service';
import { PlacasController } from './placas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Placa } from './entities/placa.entity';

@Module({
  imports:[TypeOrmModule.forFeature([
    Placa

  ])],
  controllers: [PlacasController],
  providers: [PlacasService,],
})
export class PlacasModule {}
