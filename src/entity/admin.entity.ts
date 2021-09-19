import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";
import { Roles, Statuses } from '../config/constants';

@Entity('admin')
export class AdminEntity {
    @PrimaryGeneratedColumn()
    readonly id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({ type: 'enum', name: 'roles', enum: Roles })
    role?: Roles;

    @Column({ length: 20, nullable: true })
    phone?: string;

    @Column()
    staff_id: string;

    @Column()
    email: string;

    @Column({ type: 'enum', name: 'status', enum: Statuses })
    status?: Statuses;
}