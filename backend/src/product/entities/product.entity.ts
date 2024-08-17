import { Picture } from 'src/picture/entities/picture.entity';
import { Vendor } from 'src/vendor/entities/vendor.entity';
import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('text')
  description: string;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @ManyToMany(() => Picture, (picture) => picture.product)
  pictures: Picture[];

  @ManyToOne(() => Vendor, (vendor) => vendor.products)
  vendor: Vendor;
}
