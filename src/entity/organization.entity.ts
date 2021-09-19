import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";
import { Statuses } from '../config/constants';

@Entity('organization')
export class OrganizationEntity {
    @PrimaryGeneratedColumn()
    readonly id: number;

    @Column()
    name: string;

    @Column()
    city: string;

    @Column({ type: 'enum', name: 'status', nullable: true, enum: Statuses })
    status?: Statuses;
}