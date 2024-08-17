import { Injectable } from '@nestjs/common';
import { CreateVendorDto } from './dto/create-vendor.dto';
import { UpdateVendorDto } from './dto/update-vendor.dto';
import { Vendor } from './entities/vendor.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class VendorService {
  constructor(
    @InjectRepository(Vendor)
    private vendorRepository: Repository<Vendor>,
  ) {}

  async create(createVendorDto: CreateVendorDto): Promise<Vendor> {
    const vendor = this.vendorRepository.create(createVendorDto);
    return this.vendorRepository.save(vendor);
  }

  async findAll(): Promise<Vendor[]> {
    return await this.vendorRepository.find();
  }

  async findOne(id: number) {
    return await this.vendorRepository.findOne({
      where: { id },
      relations: ['products'],
    });
  }

  async update(id: number, updateVendorDto: UpdateVendorDto) {
    await this.vendorRepository.update(id, updateVendorDto);
    return await this.findOne(id);
  }

  remove(id: number) {
    return `This action removes a #${id} vendor`;
  }
}
