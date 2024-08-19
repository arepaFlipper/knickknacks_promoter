import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateVendorDto } from './dto/create-vendor.dto';
import { UpdateVendorDto } from './dto/update-vendor.dto';
import { Vendor } from './entities/vendor.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class VendorService {
  constructor(
    @InjectRepository(Vendor)
    private vendorRepository: Repository<Vendor>,
  ) {}

  async getInterestedUsers(vendorId: number) {
    const vendor = await this.vendorRepository.findOne({
      where: { id: vendorId },
      relations: ['products', 'products.users'],
    });

    if (!vendor) {
      throw new NotFoundException(`Vendor with ID ${vendorId} not found`);
    }

    const interestedUsers = vendor.products.reduce((users: User[], product) => {
      product.users.forEach((user) => {
        if (!users.some((u) => u.id === user.id)) {
          users.push(user);
        }
      });
      return users;
    }, []);
    return interestedUsers;
  }

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

  async remove(id: number) {
    await this.vendorRepository.delete(id);
    return `This action removes a #${id} vendor`;
  }
}
