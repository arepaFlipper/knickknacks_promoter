import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePictureDto } from './dto/create-picture.dto';
import { UpdatePictureDto } from './dto/update-picture.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Picture } from './entities/picture.entity';
import { Repository } from 'typeorm';
import { randomInt } from 'crypto';

@Injectable()
export class PictureService {
  constructor(
    @InjectRepository(Picture)
    private pictureRepository: Repository<Picture>,
  ) {}

  async create(createPictureDto: CreatePictureDto) {
    const picture = this.pictureRepository.create(createPictureDto);
    return await this.pictureRepository.save(picture);
  }

  async findAll(): Promise<Picture[]> {
    return await this.pictureRepository.find();
  }

  async findOne(id: number): Promise<Picture> {
    const picture = await this.pictureRepository.findOne({
      where: { id },
      relations: ['product', 'user'],
    });

    if (!picture) {
      throw new NotFoundException(`Picture with ID ${id} not found`);
    }
    return picture;
  }

  async update(id: number, updatePictureDto: UpdatePictureDto) {
    await this.pictureRepository.update(id, updatePictureDto);
    const updatedPicture = await this.findOne(id);
    return updatedPicture;
  }

  async remove(id: number) {
    await this.pictureRepository.delete(id);
  }

  assignCoordinates(imagePath: string): {
    imagePath: string;
    coordinates: { x1: number; y1: number; x2: number; y2: number };
  } {
    return {
      imagePath,
      coordinates: {
        x1: randomInt(100),
        y1: randomInt(100),
        x2: randomInt(100),
        y2: randomInt(100),
      },
    };
  }
}
