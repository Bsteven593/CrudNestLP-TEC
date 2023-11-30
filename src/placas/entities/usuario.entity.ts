import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('usuario')
export class EntityUsuario{
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column("varchar")
    nombre:string

    @Column("varchar")
    apellido:string

    @Column("numeric",{ nullable: true,unique:true })
    cedula:number

    @Column("varchar")
    direccion:string

    @Column("varchar")
    ciudad:string


}