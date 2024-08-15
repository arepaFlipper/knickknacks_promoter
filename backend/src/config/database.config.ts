import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const databaseConfig: TypeOrmModuleOptions = {
  type: 'sqlite',
  database: 'vendor_product.sqlite',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true,
};
