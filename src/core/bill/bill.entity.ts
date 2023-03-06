import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";
import { PROVIDER_ENUM, PROVIDER_TYPE, TRANSACTION_TYPE_ENUM, TRANSCTION_TYPE } from "./enums/create-bill.enum";

@Entity()
export class BillEntity{
  @PrimaryGeneratedColumn()
  billId:number;

  @Column({type:"enum", enum:TRANSACTION_TYPE_ENUM})
  transactionType:TRANSCTION_TYPE;

  @Column({type:"enum", enum:PROVIDER_ENUM})
  provider:PROVIDER_TYPE;

  @Column()
  privateAccount:number;

  @Column()
  paymentAmount:number;

  @CreateDateColumn()
  creationTime:Date;
}