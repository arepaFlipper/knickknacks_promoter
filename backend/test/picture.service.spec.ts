import { Repository } from 'typeorm';
import { PictureService } from '../src/picture/picture.service';
import { Picture } from '../src/picture/entities/picture.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Test, TestingModule } from '@nestjs/testing';

describe('PictureService', () => {
  let service: PictureService;
  let repo: Repository<Picture>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PictureService,
        {
          provide: getRepositoryToken(Picture),
          useClass: Repository,
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
    it('should successfully create a picture', async () => {
      const pictureData = {
        imagePath: 'uploads/image.jpg',
        coordinates: { x1: 10, y1: 20, x2: 30, y2: 40 },
      };
      const savedPicture = { id: 1, ...pictureData };

      jest.spyOn(repo, 'create').mockReturnValue(savedPicture as Picture);
      jest.spyOn(repo, 'save').mockResolvedValue(savedPicture as Picture);

      const result = await service.create(pictureData);
      expect(result).toEqual(savedPicture);
      expect(repo.create).toEqual(pictureData);
      expect(repo.save).toEqual(pictureData);
    });
  });

  describe('findOne', () => {
    it('should return a picture by ID', async () => {
      const pictureId = 1;
      const foundPicture = {
        id: pictureId,
        imagePath: 'uploads/image.jpg',
        coordinates: { x1: 10, y1: 20, x2: 30, y2: 40 },
      };

      jest.spyOn(repo, 'findOne').mockResolvedValue(foundPicture as Picture);

      const result = await service.findOne(pictureId);
      expect(result).toEqual(foundPicture);
      expect(repo.findOne).toHaveBeenCalledWith({ where: { id: pictureId } });
    });
  });

  describe('findAll', () => {
    it('should return an array of picture', async () => {
      const foundPictures = [
        {
          id: 1,
          imagePath: 'uploads/image1.jpg',
          coordinates: { x1: 10, y1: 20, x2: 30, y2: 40 },
        },
        {
          id: 2,
          imagePath: 'uploads/image2.jpg',
          coordinates: { x1: 15, y1: 25, x2: 35, y2: 45 },
        },
      ];

      jest.spyOn(repo, 'find').mockResolvedValue(foundPictures as Picture[]);

      const result = await service.findAll();
      expect(result).toEqual(foundPictures);
      expect(repo.find).toHaveBeenCalled();
    });
  });

  describe('update', () => {
    it('should update a picture', async () => {
      const pictureId = 1;
      const updateData = { imagePath: 'uploads/updated_image.jpg' };
      const updatedPicture = {
        id: pictureId,
        coordinates: { x1: 10, y1: 20, x2: 30, y2: 40 },
        ...updateData,
      };

      // @ts-expect-error while The methods are not defined yet.
      jest.spyOn(repo, 'update').mockResolvedValue(undefined);
      jest.spyOn(repo, 'findOne').mockResolvedValue(updatedPicture as Picture);

      const result = await service.update(pictureId, updateData);
      expect(result).toEqual(updatedPicture);
      expect(repo.update).toHaveBeenCalledWith(pictureId, updateData);
      expect(repo.findOne).toHaveBeenCalledWith({ where: { id: pictureId } });
    });
  });

  describe('remove', () => {
    it('should delete a picture', async () => {
      const pictureId = 1;
      jest.spyOn(repo, 'delete').mockResolvedValue({ affected: 1 } as any);

      const result = await service.remove(pictureId);
      expect(result).toBe(true);
      expect(repo.delete).toHaveBeenCalledWith(pictureId);
    });

    it('should return false if no picture is deleted', async () => {
      const pictureId = 1;

      jest.spyOn(repo, 'delete').mockResolvedValue({ affected: 0 } as any);

      const result = await service.remove(pictureId);
      expect(result).toBe(false);
      expect(repo.delete).toHaveBeenCalledWith(pictureId);
    });
  });
});
