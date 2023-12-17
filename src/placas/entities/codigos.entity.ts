import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { PlacaEntity } from "./placa.entity"

@Entity('codigo')
export class CodigoEntity{

  
    @PrimaryGeneratedColumn('increment')
    id:number

    @Column('text')
    serie:string

    @ManyToOne(type => PlacaEntity, placa => placa.codigos)
    placa:PlacaEntity
    

} 