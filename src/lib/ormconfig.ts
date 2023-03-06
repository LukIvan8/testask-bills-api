import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { BillEntity } from "../core/bill/bill.entity";

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 49155,
  username: 'postgres',
  password: 'postgrespw',
  database: 'postgres',
  entities: [BillEntity],
  synchronize: true,
};