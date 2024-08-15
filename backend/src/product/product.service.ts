import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  async create(productData: Partial<Product>): Promise<Product> {
    return;
  }
  async findAll(): Promise<Product[]> {
    return;
  }
  async findOne(id: number): Promise<Product> {
    return;
  }
  async update(id: number, productData: Partial<Product>) {
    return;
  }
  async remove(id: number): Promise<void> {}
}
