import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Placa } from "./placa.entity"

@Entity()
export class CodigoEntity{

  
    @PrimaryGeneratedColumn('increment')
    id:number

    @Column('text')
    serie:string

    @ManyToOne(
        ()=>Placa,
        (placa)=>placa.codigoplacas
    )
    placa?:CodigoEntity

} 