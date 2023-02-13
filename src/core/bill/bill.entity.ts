import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class BillEntity{
  @PrimaryGeneratedColumn()
  billId:number;

  @Column()
  transactionType:string;

  @Column()
  provider:string;

  @Column()
  privateAccount:number;

  @Column()
  paymentAmount:number;
}