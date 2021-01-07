import { check } from 'express-validator';

export const taskValidator = [check('name').isLength({ min: 1, max: 1000 }), check('isDone').isBoolean()];
