import { Request, Response, NextFunction, Express } from 'express';

export default (app: Express) => {
  app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send({
      message: 'home of branch'
    })
  })
}