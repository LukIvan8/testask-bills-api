import { IsNotEmpty, IsNumber } from "class-validator";
import { PROVIDER_TYPE, TRANSCTION_TYPE } from "../enums/create-bill.enum";

export class CreateBillDto{
  @IsNotEmpty()
  transactionType:TRANSCTION_TYPE;

  @IsNotEmpty()
  provider:PROVIDER_TYPE;

  @IsNotEmpty()
  @IsNumber()
  privateAccount:number;

  @IsNotEmpty()
  @IsNumber()
  paymentAmount:number;
}