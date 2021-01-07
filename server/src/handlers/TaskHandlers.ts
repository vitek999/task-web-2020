import { NextFunction, Request, Response } from 'express';
import { Task } from '../db/models/Task';
import { validationResult } from 'express-validator';

export async function getAllTasksHandler(req: Request, res: Response, next: NextFunction) {
  const tasks = await Task.findAll();
  res.send(tasks);
}

export async function getTaskByIdHandler(req: Request, res: Response, next: NextFunction) {
  const taskId = req.params.id;
  const task = await Task.findByPk(taskId);
  if (task != null) {
    res.send(task);
  } else {
    res.status(404);
    res.json({ message: `task with id ${taskId} not found` });
  }
}

export async function createTaskHandler(req: Request, res: Response, next: NextFunction) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors });
  }
  try {
    await Task.create(req.body);
    res.status(201);
    res.json({ message: `Success` });
  } catch (e) {
    console.error(e);
    res.status(400);
    res.json({ message: e });
  }
}

export async function updateTaskHandler(req: Request, res: Response, next: NextFunction) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors });
  }
  const taskId = req.params.id;
  console.log(req.body);
  const task = await Task.findByPk(taskId);
  if (task !== null) {
    task.name = req.body['name'];
    task.isDone = req.body['isDone'];
    await task.save();
    res.json({ message: `Task updated` });
  }
}

export async function deleteTaskHandler(req: Request, res: Response, next: NextFunction) {
  const taskId = req.params.id;
  await Task.destroy({
    where: {
      id: taskId
    }
  });
  res.json({ message: `Task deleted` });
}
