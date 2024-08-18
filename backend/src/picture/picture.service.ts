import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePictureDto } from './dto/create-picture.dto';
import { UpdatePictureDto } from './dto/update-picture.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Picture } from './entities/picture.entity';
import { Repository } from 'typeorm';
import { randomInt } from 'crypto';
import { User } from 'src/user/entities/user.entity';
import { Product } from 'src/product/entities/product.entity';

@Injectable()
export class PictureService {
  constructor(
    @InjectRepository(Picture)
    private pictureRepository: Repository<Picture>,
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(createPictureDto: CreatePictureDto) {
    try {
      let product: Product | undefined;
      if (createPictureDto.productId) {
        product = await this.productRepository.findOne({
          where: { id: createPictureDto.productId },
        });
        const pictureData = {
          ...createPictureDto,
          product,
        };
        const picture = this.pictureRepository.create(pictureData);
        return this.productRepository.save(picture);
      }
    } catch (error) {
      throw new NotFoundException(`The data is invalid`);
    }
  }

  async findAll(): Promise<Picture[]> {
    return await this.pictureRepository.find();
  }

  async findOne(id: number): Promise<Picture> {
    const picture = await this.pictureRepository.findOne({
      where: { id },
      relations: ['product', 'users'],
    });

    if (!picture) {
      throw new NotFoundException(`Picture with ID ${id} not found`);
    }
    return picture;
  }

  async update(
    id: number,
    updatePictureDto: UpdatePictureDto,
  ): Promise<Picture> {
    const picture = await this.pictureRepository.findOne({
      where: { id },
      relations: ['product', 'users'],
    });

    if (!picture) {
      throw new NotFoundException(`Picture with id ${id} not found`);
    }

    try {
      if (updatePictureDto.productId) {
        const product = await this.productRepository.findOne({
          where: { id: updatePictureDto.productId },
        });
        if (!product) {
          throw new NotFoundException(
            `Product with id ${updatePictureDto.productId} not found`,
          );
        }
        picture.product = product;
      }

      if (updatePictureDto.userId) {
        const user = await this.userRepository.findOne({
          where: { id: updatePictureDto.userId },
        });
        if (!user) {
          throw new NotFoundException(
            `User with id ${updatePictureDto.userId} not found`,
          );
        }
        picture.users.push(user);
      }

      // Update picture properties
      Object.assign(picture, updatePictureDto);

      return await this.pictureRepository.save(picture);
    } catch (error) {
      throw new NotFoundException(`The data is invalid`);
    }
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
