import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePictureDto } from './dto/create-picture.dto';
import { UpdatePictureDto } from './dto/update-picture.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Picture } from './entities/picture.entity';
import { Repository } from 'typeorm';

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

  remove(id: number) {
    return `This action removes a #${id} picture`;
  }

  assignCoordinates(id: number, coordiantes) {
    return `This action removes a #${id} picture`;
  }
}
