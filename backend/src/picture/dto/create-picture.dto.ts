import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

class CoordinatesDto {
  @IsInt()
  @IsNotEmpty()
  x1: number;

  @IsInt()
  @IsNotEmpty()
  y1: number;

  @IsInt()
  @IsNotEmpty()
  x2: number;

  @IsInt()
  @IsNotEmpty()
  y2: number;
}

export class CreatePictureDto {
  @IsString()
  @IsNotEmpty()
  imagePath: string;

  @ValidateNested()
  @Type(() => CoordinatesDto)
  @IsNotEmpty()
  coordinates: CoordinatesDto;

  @IsInt()
  @IsOptional()
  productId?: number;

  @IsInt()
  @IsOptional()
  userId?: number;
}
