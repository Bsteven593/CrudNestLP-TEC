import { Column, Entity, OneToMany, PrimaryGeneratedColumn, } from "typeorm";
import { CodigoEntity } from "./codigos.entity";


@Entity('placa')
export class PlacaEntity {
    @PrimaryGeneratedColumn("increment")
    id: number;

   

    @Column('numeric')
    serie: number;

    @Column('varchar', { nullable: true,})
    provincia: string;

    @Column('numeric', { nullable: true })
    valor: number;

    @OneToMany(type=> CodigoEntity, codigo => codigo.placa)
    codigos: CodigoEntity[];
}

