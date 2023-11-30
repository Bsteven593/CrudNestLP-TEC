import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { EntityVehiculo } from "./vehiculo.entity";

@Entity('usuario')
export class EntityUsuario{
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column("varchar")
    nombre:string

    @Column("varchar")
    apellido:string

    @Column("numeric",{ nullable: true, })
    cedula:number

    @Column("varchar")
    direccion:string

    @Column("varchar")
    ciudad:string

    @OneToMany(() => EntityVehiculo, vehiculo => vehiculo.usuarios)
    vehiculos: EntityVehiculo

      //ejemplo
  //  @OneToMany(
   //     ()=>Curso,
    //    (curso)=>curso.alumno,
    //    {
    //    cascade:true
    //    }
    //    )
    //    curso?:Curso

   
}