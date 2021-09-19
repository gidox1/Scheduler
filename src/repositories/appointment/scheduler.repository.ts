import { Repository } from 'typeorm'
import { EntityRepository } from 'typeorm/decorator/EntityRepository'
import { SchedulerEntity } from '../../entity/scheduler.entity';

@EntityRepository(SchedulerEntity)
export class SchedulerRepository extends Repository<SchedulerEntity> {}
