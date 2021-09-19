import { Repository } from 'typeorm'
import { EntityRepository } from 'typeorm/decorator/EntityRepository'
import { AppointmentEntity } from '../../entity/appointments.entity';

@EntityRepository(AppointmentEntity)
export class AppointmentRepository extends Repository<AppointmentEntity> {}
