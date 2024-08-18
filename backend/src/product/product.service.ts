import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { Vendor } from 'src/vendor/entities/vendor.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
    @InjectRepository(Vendor)
    private readonly vendorRepository: Repository<Vendor>,
  ) {}

  async create(createProductDto: CreateProductDto): Promise<Product> {
    try {
      let vendor: Vendor | undefined;
      if (createProductDto.vendorId) {
        vendor = await this.vendorRepository.findOne({
          where: { id: createProductDto.vendorId },
        });
      }
      const productData = {
        ...createProductDto,
        vendor,
      };
      const product = this.productRepository.create(productData);
      return this.productRepository.save(product);
    } catch (error) {
      throw new NotFoundException(`The data is invalid`);
    }
  }

  async findAll(): Promise<Product[]> {
    return await this.productRepository.find();
  }

  async findOne(id: number) {
    const res = await this.productRepository.findOne({
      where: {
        id,
      },
      relations: ['vendor', 'pictures'],
    });
    return res;
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    await this.productRepository.update(id, updateProductDto);
    return await this.findOne(id);
  }

  async remove(id: number) {
    await this.productRepository.delete(id);
  }
}
