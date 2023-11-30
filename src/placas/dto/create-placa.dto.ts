import { IsNumber, IsString, MinLength } from "class-validator";
import { Unique } from "typeorm";

export class CreatePlacaDto {

    @IsNumber()
    serie: number
    @IsString()
    @MinLength(3)
    
     provincia: string;
    @IsNumber()
    valor: number;
    


}
