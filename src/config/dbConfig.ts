console.log(`${__dirname}/entity/`)
export default {
    type:       process.env.TYPEORM_CONNECTION || 'mysql',
    host:       process.env.DB_HOST || '127.0.0.1',
    port:       process.env.DB_PORT || '3306',
    username:   process.env.DB_USERNAME || 'scheduler_user',
    password:   process.env.DB_PASSWORD || 'scheduler_pass',
    database:   process.env.DB_NAME || 'schedulerDB',
    synchronize:    Boolean(process.env.TYPEORM_SYNCHRONIZE) || true,
    cli: { 
        migrationsDir: process.env.TYPEORM_MIGRATIONS_DIR || 'src/migrations'
    },
    entities: [`${__dirname}/entity/*.entity.{ts,js}`],
    ssl: false,
    migrationsRun: true
}