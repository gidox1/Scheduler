import {
  Entity,
  Column, 
  PrimaryGeneratedColumn, 
  CreateDateColumn, 
  UpdateDateColumn
} from "typeorm";
import { AppointmentStatuses } from '../config/constants';

@Entity('appointment_days')
export class AppointmentDaysEntity {
    @PrimaryGeneratedColumn()
    readonly id: number;

    @Column()
    name: string;

    // @Column()
    // appointment_id: string;

    @Column({ type: 'enum', name: 'status', enum: AppointmentStatuses })
    status: AppointmentStatuses;

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;
  
    @UpdateDateColumn({
      type: 'timestamp',
    })
    updatedAt: Date;
}