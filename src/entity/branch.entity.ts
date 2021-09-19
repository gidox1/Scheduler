import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";
import { Statuses } from '../config/constants';

@Entity('branches')
export class BranchEntity {
    @PrimaryGeneratedColumn()
    readonly id: number;

    @Column()
    name: string;

    @Column()
    state: string;

    @Column()
    city: string;

    @Column({ type: 'enum', name: 'status', nullable: true, enum: Statuses })
    status?: Statuses;
}