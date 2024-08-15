import { TypeOrmModule } from '@nestjs/typeorm';
import { VendorController } from './vendor.controller';
import { Vendor } from './entities/vendor.entity';
import { Module } from '@nestjs/common';
import { VendorService } from './vendor.service';

@Module({
  imports: [TypeOrmModule.forFeature([Vendor])],
  controllers: [VendorController],
  providers: [VendorService],
  exports: [VendorService],
})
export class VendorModule {}
