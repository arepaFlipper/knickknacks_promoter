import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Picture } from './entities/picture.entity';

@Injectable()
export class PictureService {
  constructor(
    //@InjectRepository(Vendor)
    private vendorRepository: Repository<Picture>,
  ) {}

  async create(vendorData: Partial<Picture>): Promise<void> {} //Promise<Vendor> {}
  async findAll(): Promise<void> {} //Promise<Vendor[]> {}
  async findOne(id: number): Promise<void> {} //Promise<Vendor[]>
  async update(id: number, vendorData: Partial<Picture>): Promise<void> {} //Promise<Vendor>
  async remove(id: number): Promise<void> {} //Promise<Vendor>
  async findByName(name: string): Promise<void> {} //Promise<Vendor>
}
