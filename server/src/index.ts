import express from 'express';
import { sequilize } from './db/db';
import { taskRouter } from './routes/TaskRouter';
import cors from 'cors';

const app = express();
const PORT = 8000;

(async () => {
  await sequilize.sync();
  app.use(cors());
  app.use('/*', express.json());

  app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
  });
  app.use('/tasks', taskRouter);
})();
