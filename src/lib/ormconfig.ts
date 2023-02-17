import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { BillEntity } from "../core/bill/bill.entity";

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'containers-us-west-178.railway.app',
  port: 7283,
  // Где хранить секретные данные?
  username: 'postgres',
  password: 'BKoRz233RRlaybQgIJV2',
  database: 'railway',
  entities: [BillEntity],
  synchronize: true,
};
