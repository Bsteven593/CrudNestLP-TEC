import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePlacaDto } from './dto/create-placa.dto';
import { UpdatePlacaDto } from './dto/update-placa.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Placa } from './entities/placa.entity';
import { PaginacionDto } from '../common/dto/paginacion.dto';

@Injectable()
export class PlacasService {

  constructor(
    @InjectRepository(Placa)
    private readonly placaRepository: Repository<Placa>) { }

  async create(createPlacaDto: CreatePlacaDto) {
    try {
      const placas = this.placaRepository.create(createPlacaDto);
      await this.placaRepository.save(placas)
      return placas
    } catch (error) {
      console.log(error)
      throw new Error("No se pudo realizar el ingreso")
    }

  }

  findAll(paginacionDto: PaginacionDto) {
    const { limit = 10, offset = 1 } = paginacionDto;
    return this.placaRepository.find({
      take: limit,
      skip: offset
    });
  }

  async findOne(id: number) {
    const placa = this.placaRepository.findOneBy({ id });
    if (!placa)
      throw new NotFoundException(id)
    return placa
  }

  async update(id: number, updatePlacaDto: UpdatePlacaDto) {
    const placa = await this.placaRepository.preload({
      id: id,
      ...updatePlacaDto
    })
    if (!placa)
      throw new NotFoundException("No se elimino");
    await this.placaRepository.save(placa);
    return placa
  }
    

  
  

  async remove(id: number) {
  const placa = await this.findOne(id);
  this.placaRepository.delete(placa);

}
}
