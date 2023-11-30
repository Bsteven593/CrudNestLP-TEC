import { IsNumber, IsString } from "class-validator"

export class CreateUsuarioDto {

    @IsString()
    nombre:string
    @IsString()
    apellido:string
    @IsNumber()
    cedula:number
    @IsString()
    direccion:string
    @IsString()  
    ciudad:string




}