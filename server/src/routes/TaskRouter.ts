import express from 'express';
import {
  createTaskHandler,
  deleteTaskHandler,
  getAllTasksHandler,
  getTaskByIdHandler,
  updateTaskHandler
} from '../handlers/TaskHandlers';
import { taskValidator } from '../validators/TaskValidators';

export const taskRouter = express.Router();

taskRouter.get('/', getAllTasksHandler);

taskRouter.get('/:id', getTaskByIdHandler);

taskRouter.post('/', taskValidator, createTaskHandler);

taskRouter.patch('/:id', taskValidator, updateTaskHandler);

taskRouter.delete('/:id', deleteTaskHandler);
