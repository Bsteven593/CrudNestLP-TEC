import { Column, Entity, PrimaryGeneratedColumn, } from "typeorm";

@Entity('placas')
export class Placa {
    @PrimaryGeneratedColumn("increment")
    id: number;

   

    @Column('numeric')
    serie: number;

    @Column('varchar', { nullable: true, })
    provincia: string;

    @Column('numeric', { nullable: true })
    valor: number;


}

