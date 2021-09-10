import express, { Request, Response, Express } from 'express';
import cors from 'cors';
import routes from './routes';
import constants from './config/constants';
const app:Express = express();

//set up middlewares
app.use(cors());
const options: cors.CorsOptions = {
  origin: constants.ALLOWED_ORIGINS
};

app.use(cors(options));
app.use(express.json());

//set up routes
routes(app);

//return generic message to catch unregistered routes
app.get('*', (req: Request, res: Response) : Response => {
  return res.send({
    message: 'Scheduler Up and Running', status: 'success'
  })
})

export default app;