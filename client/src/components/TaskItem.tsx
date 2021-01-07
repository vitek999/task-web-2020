import React, { ReactElement } from 'react';
import { Button, Checkbox, Icon, List } from 'semantic-ui-react';
import { Task } from '../dto/Task';

export interface TaskItemProps {
  task: Task;
  onDelete: (id: number) => void;
  onChange: (task: Task) => void;
}

export function TaskItem({ task, onDelete, onChange }: TaskItemProps): ReactElement {
  return (
    <List.Item>
      <List.Content floated={'right'}>
        <Button icon color={'red'} onClick={() => onDelete(task.id!)}>
          <Icon name={'remove'} />
        </Button>
      </List.Content>
      <List.Content>
        <Checkbox
          checked={task.isDone}
          onChange={() => onChange(task)}
          label={<label style={{ textDecoration: task.isDone ? 'line-through' : undefined }}>{task.name}</label>}
        />
      </List.Content>
    </List.Item>
  );
}
