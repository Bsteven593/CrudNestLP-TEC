import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('vehiculos')
export class EntityUsuario{
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column()
    marca:string;

    @Column()
    modelo:string;

    @Column()
    temporada:string;

    @Column()
    serie:string


}