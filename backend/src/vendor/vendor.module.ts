import { Module } from '@nestjs/common';
import { VendorService } from './vendor.service';
import { VendorController } from './vendor.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vendor } from './entities/vendor.entity';
import { UserModule } from 'src/user/user.module';
import { ProductModule } from 'src/product/product.module';
import { Product } from 'src/product/entities/product.entity';
import { User } from 'src/user/entities/user.entity';

@Module({
  controllers: [VendorController],
  providers: [VendorService],
  imports: [TypeOrmModule.forFeature([Vendor, Product, User])],
  exports: [VendorService],
})
export class VendorModule {}
