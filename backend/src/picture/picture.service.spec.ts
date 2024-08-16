import { Test, TestingModule } from '@nestjs/testing';
import { PictureService } from './picture.service';
import { Repository } from 'typeorm';
import { Picture } from './entities/picture.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('PictureService', () => {
  let service: PictureService;
  let repo: Repository<Picture>;

  const mockRepository = {
    create: jest.fn(),
    save: jest.fn(),
    find: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PictureService,
        {
          provide: getRepositoryToken(Picture),
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<PictureService>(PictureService);
    repo = module.get<Repository<Picture>>(getRepositoryToken(Picture));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should successfully create a picture 🛀', async () => {
      const pictureData = {
        imagePath: 'uploads/image.jpg',
        coordinates: { x1: 10, y1: 20, x2: 30, y2: 40 },
      };
      const savedPicture = { id: 1, ...pictureData };

      jest.spyOn(repo, 'create').mockReturnValue(pictureData as Picture);
      jest.spyOn(repo, 'save').mockResolvedValue(savedPicture as Picture);

      const result = await service.create(pictureData);
      expect(result).toEqual(savedPicture);
      expect(repo.create).toHaveBeenCalledWith(pictureData);
      expect(repo.save).toHaveBeenCalledWith(pictureData);
    });
  });

  describe('findAll', () => {
    it('should return an array of pictures 🍁', async () => {
      const pictures = [
        {
          id: 1,
          imagePath: 'uploads/image1.jpg',
          coordinates: { x1: 0, y1: 0, x2: 100, y2: 100 },
        },
        {
          id: 2,
          imagePath: 'uploads/image2.jpg',
          coordinates: { x1: 10, y1: 10, x2: 110, y2: 110 },
        },
      ];

      jest.spyOn(repo, 'find').mockResolvedValue(pictures as Picture[]);

      const result = await service.findAll();
      expect(result).toEqual(pictures);
      expect(repo.find).toHaveBeenCalledWith();
    });
  });

  describe('findOne', () => {
    it('should return a single picture 🎾', async () => {
      const picture = {
        id: 1,
        imagePath: 'uploads/image.jpg',
        coordinates: { x1: 0, y1: 0, x2: 100, y2: 100 },
      };
      jest.spyOn(repo, 'findOne').mockResolvedValue(picture as Picture);

      const result = await service.findOne(1);
      expect(result).toEqual(picture);
      expect(repo.findOne).toHaveBeenCalledWith({
        where: { id: 1 },
        relations: ['product', 'user'],
      });
    });
  });

  describe('update', () => {
    it('should update a picture 🏫', async () => {
      const pictureId = 1;
      const updateData = { imagePath: 'uploads/updated_image.jpg' };
      const updatedPicture = {
        id: pictureId,
        imagePath: 'uploads/updated_image.jpg',
        coordinates: { x1: 0, y1: 0, x2: 100, y2: 100 },
      };

      jest.spyOn(repo, 'update').mockResolvedValue(undefined);
      jest.spyOn(repo, 'findOne').mockResolvedValue(updatedPicture as Picture);

      const result = await service.update(pictureId, updateData);
      expect(result).toEqual(updatedPicture);
      expect(repo.update).toHaveBeenCalledWith(pictureId, updateData);
      expect(repo.findOne).toHaveBeenCalledWith({
        where: { id: pictureId },
        relations: ['product', 'user'],
      });
    });

    describe('remove 🗑️', () => {
      it('should remove a picture', async () => {
        const pictureId = 1;
        jest.spyOn(repo, 'delete').mockResolvedValue(undefined);

        service.remove(pictureId);
        expect(repo.delete).toHaveBeenCalledWith(pictureId);
      });
    });

    describe('assignCoordinates', () => {
      it('should assign coordinates to a picture', async () => {
        const pictureId = 1;
        const coordinates = { x1: 10, y1: 10, x2: 110, y2: 110 };
        const updatedPicture = {
          id: pictureId,
          imagePath: 'uploads/updated_image.jpg',
          coordinates,
        };

        jest.spyOn(repo, 'update').mockResolvedValue(undefined);
        jest
          .spyOn(repo, 'findOne')
          .mockResolvedValue(updatedPicture as Picture);

        const result = service.assignCoordinates(pictureId, coordinates);
        expect(result).toEqual(updatedPicture);
        expect(repo.update).toHaveBeenCalledWith(pictureId, { coordinates });
        expect(repo.findOne).toHaveBeenCalledWith({
          where: { id: pictureId },
          relations: ['product', 'user'],
        });
      });
    });
  });
});
