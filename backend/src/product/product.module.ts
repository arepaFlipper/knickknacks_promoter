import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Vendor } from 'src/vendor/entities/vendor.entity';
import { VendorModule } from 'src/vendor/vendor.module';

@Module({
  imports: [TypeOrmModule.forFeature([Product, Vendor]), VendorModule],
  controllers: [ProductController],
  providers: [ProductService],
  exports: [ProductService],
})
export class ProductModule {}
