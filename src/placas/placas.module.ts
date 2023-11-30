import { Module } from '@nestjs/common';
import { PlacasService } from './placas.service';
import { PlacasController } from './placas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Placa } from './entities/placa.entity';
import { EntityUsuario } from './entities/usuario.entity';
import { EntityVehiculo } from './entities/vehiculo.entity';

@Module({
  imports:[TypeOrmModule.forFeature([
    Placa,EntityUsuario,EntityVehiculo

  ])],
  controllers: [PlacasController],
  providers: [PlacasService,],
})
export class PlacasModule {}
