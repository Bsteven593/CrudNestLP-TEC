import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlacasModule } from './placas/placas.module';
import { PlacasController } from './placas/placas.controller';
import { PlacasService } from './placas/placas.service';
import { CommonModule } from './common/common.module';

@Module({
  imports: [
    TypeOrmModule,
    PlacasModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host:'localhost', 
      port: 5433,
      username:'postgres',
      password: '1234',
      database:'bslm',
      autoLoadEntities:true, //carge automaticamente las entidades
      synchronize:true, 
      dropSchema:true,

      //en produccion se debe poner falsose debe poner falso
  }),
    CommonModule,


    ],
  controllers: [AppController,],
  providers: [AppService,],
})
export class AppModule {}
