import { Body, Controller, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { Vendor } from 'src/vendor/entities/vendor.entity';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async create(@Body() productData: Partial<Vendor>) {
    try {
      return await this.productService.create(productData);
    } catch (error) {}
  }
}
