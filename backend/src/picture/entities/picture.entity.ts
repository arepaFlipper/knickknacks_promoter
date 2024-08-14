import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Picture {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  imagePath: string;

  @Column('json')
  coordinates: { x1: number; y1: number; x2: number; y2: number };
}
