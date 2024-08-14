import { Controller } from '@nestjs/common';
import { PictureService } from './picture.service';

@Controller('upload')
export class PictureController {
  constructor(private readonly uploadService: PictureService) {}
}
