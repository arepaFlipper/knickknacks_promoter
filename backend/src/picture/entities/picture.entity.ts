import { Product } from 'src/product/entities/product.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Picture {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  imagePath: string;

  @Column('json')
  coordinates: { x1: number; y1: number; x2: number; y2: number };

  @ManyToMany(() => Product, (product) => product.pictures)
  product: Product;

  @ManyToOne(() => User, (user) => user.pictures)
  user: User;
}
