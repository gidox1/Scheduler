import { Request, Response, NextFunction } from 'express';

export default (app: any) => {
  app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send({
      message: 'home of users'
    })
  })
}