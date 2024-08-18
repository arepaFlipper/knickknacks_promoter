import { IsInt, IsNotEmpty } from 'class-validator';

export class PurchaseIntentionDto {
  @IsInt()
  @IsNotEmpty()
  userId: number;

  @IsInt()
  @IsNotEmpty()
  pictureId: number;
}
