import { Test, TestingModule } from '@nestjs/testing';
import { PictureController } from './picture.controller';
import { PictureService } from './picture.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Picture } from './entities/picture.entity';
import { Repository } from 'typeorm';
import { Product } from 'src/product/entities/product.entity';
import { User } from 'src/user/entities/user.entity';

describe('PictureController', () => {
  let controller: PictureController;
  let service: PictureService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PictureController],
      providers: [
        PictureService,
        { provide: getRepositoryToken(Picture), useClass: Repository },
        { provide: getRepositoryToken(Product), useClass: Repository },
        { provide: getRepositoryToken(User), useClass: Repository },
      ],
    }).compile();

    controller = module.get<PictureController>(PictureController);
    service = module.get<PictureService>(PictureService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
