import {
  IsString,
  IsNotEmpty,
  IsDecimal,
  IsInt,
  Min,
  IsOptional,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @Min(0)
  price: number;

  @IsInt()
  @IsNotEmpty()
  vendorId: number;

  @IsInt()
  @IsOptional()
  userId?: number;
}
