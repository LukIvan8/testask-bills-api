import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BillModule } from "./core/bill/bill.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { typeOrmConfig } from "./lib/ormconfig";

@Module({
  imports: [BillModule, TypeOrmModule.forRoot(typeOrmConfig)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
