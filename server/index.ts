import express, { Request, Response } from 'express';
import next from 'next';

const port = 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get('*', (req: Request, res: Response) => handle(req, res));

  server.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`>Ready on http://localhost:${port}`);
  });
});
