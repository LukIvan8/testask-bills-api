import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { BillEntity } from "./bill.entity";
import { CreateBillDto } from "./dto/create-bill.dto";

@Injectable()
export class BillService {
  constructor(@InjectRepository(BillEntity) private readonly billRepository:Repository<BillEntity>) {
  }

  listAll(){
    return this.billRepository.find();
  }

  create(bill: CreateBillDto){
    return this.billRepository.save(bill);
  }
}
