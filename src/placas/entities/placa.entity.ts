import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, } from "typeorm";
import { EntityVehiculo } from "./vehiculo.entity";

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

    @OneToOne(()=>EntityVehiculo,(vehiculo)=>vehiculo.placas)
    @JoinColumn()
    vehiculos: EntityVehiculo

}

