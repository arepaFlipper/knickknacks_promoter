import { Product } from 'src/product/entities/product.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Picture {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  imagePath: string;

  @Column('json')
  coordinates: { x1: number; y1: number; x2: number; y2: number };

  @ManyToOne(() => Product, (product) => product.pictures)
  product: Product;
}
