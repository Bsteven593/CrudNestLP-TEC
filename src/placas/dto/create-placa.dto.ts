import { IsNumber, IsString, MinLength } from "class-validator";


export class CreatePlacaDto {

    @IsNumber()
    serie: number
    @IsString()
    @MinLength(3)
    provincia: string;
    @IsNumber()
    valor: number;
    
    @IsString()
    @MinLength(3)
    codigoplacas?: string[];


}
