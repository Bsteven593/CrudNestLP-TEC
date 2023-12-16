import { Module } from '@nestjs/common';
import { PlacasService } from './placas.service';
import { PlacasController } from './placas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Placa } from './entities/placa.entity';
import { CodigoEntity } from './entities/codigos.entity';

@Module({
  imports:[TypeOrmModule.forFeature([
    Placa,CodigoEntity

  ])],
  controllers: [PlacasController],
  providers: [PlacasService,],
})
export class PlacasModule {}
