import {
  Column,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  OneToMany
} from 'typeorm'
// import { Field, Int, ObjectType } from 'type-graphql'
// import { WalletEntity } from '../../wallet/entities/wallet.entity';
// import { TransactionLogEntity } from '../../transaction/entities/transaction_log.entity'
// import { WalletLogEntity } from 'src/modules/wallet/entities/wallet.log.entity';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
  })
  updatedAt: Date;

  // @Column()
  // active: boolean;

  // @OneToMany(() => WalletLogEntity, (log: WalletLogEntity) => log.walletOwnerRef)
  // logs: Array<WalletLogEntity>

  // @OneToMany(() => TransactionLogEntity, (transaction: TransactionLogEntity) => transaction.userTransactionReciever)
  // recieverTransactions: Array<TransactionLogEntity>

  // @OneToMany(() => TransactionLogEntity, (transaction: TransactionLogEntity) => transaction.userTransactionSender)
  // senderTransactions: Array<TransactionLogEntity>
}
