import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { BillService } from "./bill.service";
import { CreateBillDto } from "./dto/create-bill.dto";

@Controller("bill")
@UsePipes(new ValidationPipe({ transform: true }))
export class BillController{
  constructor(private readonly billService: BillService) {}

  @Get("list")
  getAll(){
    return this.billService.listAll();
  }

  @Post("create")
  create(@Body() bill: CreateBillDto) {
    return this.billService.create(bill);
  }
}