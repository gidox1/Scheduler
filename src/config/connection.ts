import {createConnection, Connection } from "typeorm";
import typeOrmConfig from '../../src/config/dbConfig';

export const connection = async() => {
  return await createConnection({
    type: "mysql",
    host: '127.0.0.1',
    port:  3306,
    username:   process.env.DB_USERNAME || 'scheduler_user',
    password:   process.env.DB_PASSWORD || 'scheduler_pass',
    database:   process.env.DB_NAME || 'schedulerDB',
  });
}

 
