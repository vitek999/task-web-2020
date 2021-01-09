import React, { ReactElement } from 'react';
import { List } from 'semantic-ui-react';
import { Task } from '../dto/Task';

export interface TasksListProps {
  tasks: Task[];
  renderItem: (item: Task) => JSX.Element;
}

export function TasksList({ tasks, renderItem }: TasksListProps): ReactElement {
  return (
    <div>
      <List size={'large'} divided>
        {tasks.map((item) => renderItem(item))}
      </List>
    </div>
  );
}
