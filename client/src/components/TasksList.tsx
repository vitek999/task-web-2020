import React, { ReactElement } from 'react';
import { List } from 'semantic-ui-react';
import { Task } from '../dto/Task';
import { TaskItem } from './TaskItem';

export interface TasksListProps {
  tasks: Task[];
  onDelete: (id: number) => void;
  onChange: (task: Task) => void;
}

export function TasksList({ tasks, onDelete, onChange }: TasksListProps): ReactElement {
  return (
    <div>
      <List size={'large'} divided>
        {tasks.map((item) => (
          <TaskItem onDelete={onDelete} key={item.id} task={item} onChange={onChange} />
        ))}
      </List>
    </div>
  );
}
