import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateBillDto{
  @IsNotEmpty()
  transactionType:string;

  @IsNotEmpty()
  provider:string;

  @IsNotEmpty()
  @IsNumber()
  privateAccount:number;

  @IsNotEmpty()
  @IsNumber()
  paymentAmount:number;
}