import { IsNumber, IsString } from "class-validator"

export class CreateVehiculoDto {
        
    @IsString()
    marca:string;
    @IsString()
    modelo:string;
    @IsString()
    temporada:string;
    @IsString()
    serie:string


}