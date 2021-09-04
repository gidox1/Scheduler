import express, { Request, Response } from 'express';
const app = express();
const port = process.env.PORT || 3020

app.get('/', (req: Request, res: Response) : Response => {
  return res.send({ message: 'hello'})
})

app.listen(port, () => {
  console.log('server started on port', port)
})