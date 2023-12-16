import { Column, Entity, OneToMany, PrimaryGeneratedColumn, } from "typeorm";
import { CodigoEntity } from "./codigos.entity";


@Entity('placas')
export class Placa {
    @PrimaryGeneratedColumn("increment")
    id: number;

   

    @Column('numeric')
    serie: number;

    @Column('varchar', { nullable: true,})
    provincia: string;

    @Column('numeric', { nullable: true })
    valor: number;

    @OneToMany(
     ()  =>CodigoEntity,
     (codigo)=>codigo.placa,
    {
        cascade:true
    })

 codigoplacas?:Placa[]

}

