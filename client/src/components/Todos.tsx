import React, { ReactElement, useEffect, useState } from 'react';
import { Task } from '../dto/Task';
import { HttpClient } from '../ky/HttpClient';
import { Button, Container, Header, Modal, Segment } from 'semantic-ui-react';
import './styles.css';
import { TasksList } from './TasksList';
import { CreateTask } from './CreateTask';

export function Todos(): ReactElement {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);

  const handleOnCreate = async (name: string) => {
    setOpen(false);
    setLoading(true);
    const task: Task = {
      name: name,
      isDone: false
    };
    const result = await HttpClient.post('tasks', { json: task });
    if (result.status == 201) {
      await fetchTasks();
    }
    setLoading(false);
  };

  const handleOnChange = async (task: Task) => {
    setLoading(true);
    const newTask: Task = {
      id: task.id,
      name: task.name,
      isDone: !task.isDone
    };
    const result = await HttpClient.patch(`tasks/${newTask.id}`, { json: newTask });
    if (result.status == 200) {
      await fetchTasks();
    }
    setLoading(false);
  };

  const handleOnDelete = async (id: number) => {
    setLoading(true);
    const result = await HttpClient.delete(`tasks/${id}`);
    if (result.status == 200) {
      await fetchTasks();
    }
    setLoading(false);
  };

  const fetchTasks = async () => {
    const result = await HttpClient.get('tasks').json<Task[]>();
    setTasks(result);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <>
      <Modal onClose={() => setOpen(false)} onOpen={() => setOpen(true)} open={open}>
        <CreateTask onCreate={handleOnCreate} />
      </Modal>
      <Container className={'tasks-container'}>
        <Header size={'large'}>Задачи</Header>
        <Segment loading={isLoading}>
          <TasksList tasks={tasks} onDelete={handleOnDelete} onChange={handleOnChange} />
        </Segment>
        <Button floated={'right'} primary size={'large'} onClick={() => setOpen(true)}>
          Добавить задачу
        </Button>
      </Container>
    </>
  );
}
