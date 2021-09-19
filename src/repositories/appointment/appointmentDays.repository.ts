import { Repository } from 'typeorm'
import { EntityRepository } from 'typeorm/decorator/EntityRepository'
import { AppointmentDaysEntity } from '../../entity/appointment_days.entity';

@EntityRepository(AppointmentDaysEntity)
export class AppointmentDaysRepository extends Repository<AppointmentDaysEntity> {}
