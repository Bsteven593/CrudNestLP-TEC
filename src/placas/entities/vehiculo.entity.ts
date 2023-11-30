import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { EntityUsuario } from "./usuario.entity";
import { Placa } from "./placa.entity";


@Entity('vehiculos')
export class EntityVehiculo {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column()
    marca: string;

    @Column()
    modelo: string;

    @Column()
    temporada: string;

    @Column()
    serie: string

    @ManyToOne(() => EntityUsuario , usuario => usuario.vehiculos)
    usuarios: EntityUsuario ;

    //ejemplo
    //@ManyToOne(
    //    ()=>Alumno,
    //    (alumno)=>alumno.curso
    //    )
    //alumno?:Alumno


    @OneToOne(()=>Placa,(placa)=>placa.vehiculos)
    @JoinColumn()
    placas: Placa



}