import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { PlacasService } from './placas.service';
import { CreatePlacaDto } from './dto/create-placa.dto';
import { UpdatePlacaDto } from './dto/update-placa.dto';
import { PaginacionDto } from 'src/common/dto/paginacion.dto';

@Controller('placas')
export class PlacasController {
  constructor(private placasService: PlacasService) {}

  @Post()
  create(@Body() createPlacaDto: CreatePlacaDto) {
    return this.placasService.create(createPlacaDto);
  }

  @Get()
  findAll(@Query() paginacionDto: PaginacionDto) {
    return this.placasService.findAll(paginacionDto);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.placasService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updatePlacaDto: UpdatePlacaDto) {
    return this.placasService.update(id, updatePlacaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.placasService.remove(id);
  }
}
