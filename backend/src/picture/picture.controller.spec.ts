import { Test, TestingModule } from '@nestjs/testing';
import { PictureController } from './picture.controller';
import { PictureService } from './picture.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Picture } from './entities/picture.entity';
import { Repository } from 'typeorm';

describe('PictureController', () => {
  let controller: PictureController;
  let service: PictureService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PictureController],
      providers: [
        PictureService,
        { provide: getRepositoryToken(Picture), useClass: Repository },
      ],
    }).compile();

    controller = module.get<PictureController>(PictureController);
    service = module.get<PictureService>(PictureService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
