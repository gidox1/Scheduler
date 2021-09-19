import {
  Entity,
  Column, 
  PrimaryGeneratedColumn, 
  CreateDateColumn, 
  UpdateDateColumn
} from "typeorm";
import { SchedulerStatus } from '../config/constants';

@Entity('scheduler')
export class SchedulerEntity {
    @PrimaryGeneratedColumn()
    readonly id: number;

    @Column()
    name: string;

    // @Column()
    // branch_id: string;

    // @Column()
    // user_id: string;

    // @Column()
    // appointment_id: string;

    @Column({ type: 'enum', name: 'status', enum: SchedulerStatus })
    status: SchedulerStatus;

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;
  
    @UpdateDateColumn({
      type: 'timestamp',
    })
    updatedAt: Date;
}