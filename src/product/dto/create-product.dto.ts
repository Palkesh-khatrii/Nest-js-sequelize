import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateProductDto {

    @IsNotEmpty()
    @ApiProperty()
    prod_name: string;

    @IsNotEmpty()
    @ApiProperty()
    prod_details: string;

    @IsNotEmpty()
    @ApiProperty()
    prod_description: string;

    @IsNotEmpty()
    @ApiProperty()
    prod_price: string;

    @IsNotEmpty()
    @ApiProperty()
    prod_quantity: string;

    @IsNotEmpty()
    @ApiProperty()
    userId: number;
}
