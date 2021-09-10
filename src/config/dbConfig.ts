import { join } from 'path'

export const typeOrmConfig = {
    type:       process.env.TYPEORM_CONNECTION || 'mysql',
    host:       process.env.DB_HOST,
    port:       process.env.DB_PORT || '3306',
    username:   process.env.DB_USERNAME,
    password:   process.env.DB_PASSWORD,
    database:   process.env.DB_NAME,
    synchronize:    Boolean(process.env.TYPEORM_SYNCHRONIZE) || false,
    cli: { 
        migrationsDir: process.env.TYPEORM_MIGRATIONS_DIR || 'src/migrations'
    },
    entities: [`${__dirname}/../**/*.entity.{ts,js}`],
    ssl: false,
    migrationsRun: true
}