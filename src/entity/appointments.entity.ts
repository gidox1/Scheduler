import {
  Entity,
  Column, 
  PrimaryGeneratedColumn, 
  CreateDateColumn, 
  UpdateDateColumn
} from "typeorm";
import { SchedulerStatus } from '../config/constants';

@Entity('appointments')
export class AppointmentEntity {
    @PrimaryGeneratedColumn()
    readonly id: number;

    @Column()
    name: string;

    @Column()
    time_of_day: string;

    @Column({ type: 'enum', name: 'status', enum: SchedulerStatus })
    period: SchedulerStatus;

    // @Column()
    // branch_id: string;

    // @Column()
    //admin id
    // created_by: string;

    @Column({ type: 'timestamptz' })
    start_date: Date;

    @Column({ type: 'timestamptz' })
    end_date: Date;

    @Column({ type: 'enum', name: 'status', enum: SchedulerStatus })
    status: SchedulerStatus;

    @CreateDateColumn({ type: 'timestamp' })
    created_at: Date;
  
    @UpdateDateColumn({
      type: 'timestamp',
    })
    updated_at: Date;
}