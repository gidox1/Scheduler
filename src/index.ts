import express, { Request, Response, Express } from 'express';
import cors from 'cors';
import routes from './routes';
import { Origins } from './config/constants';
const app:Express = express();
import { UserRepository}  from './repositories/personel/user.repository'
import { connection } from './config/connection';
import {getRepository } from 'typeorm'
const UserEntity = require('./entity/user.entity');

//set up middlewares
app.use(cors());
const options: cors.CorsOptions = {
  origin: Origins.ALLOWED_ORIGINS
};

app.use(cors(options));
app.use(express.json());

//set up routes
// routes(app);

//return generic message to catch unregistered routes
app.get('*', async (req: Request, res: Response) : Promise<Response> => {
  console.log("here....", UserRepository)
  const repo = getRepository(UserEntity);
  const data = new UserEntity();
  data.firstName = 'nosa';
  data.lastName = 'ggs';
  data.email = 'test@test.com';
  data.phone = '+2347033002200';

  const us = repo.create(data);
  await repo.save(us).catch((err) => {
    console.log(err, "SAVE ERR")
  })

  // const processes = await getConnection().manager.save(data);
  // console.log(processes, "processes")
  return await res.send({
    message: 'Scheduler Up and Running', status: 'success'
  })
})

export default app;