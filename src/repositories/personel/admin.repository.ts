import { Repository } from 'typeorm'
import { EntityRepository } from 'typeorm/decorator/EntityRepository'
import { AdminEntity } from '../../entity/admin.entity';

@EntityRepository(AdminEntity)
export class AdminRepository extends Repository<AdminEntity> {}
