import React, { ReactElement, useEffect, useState } from 'react';
import { Button, Input, Modal } from 'semantic-ui-react';

export interface CreateTaskProps {
  onCreate: (name: string) => void;
}

export function CreateTask({ onCreate }: CreateTaskProps): ReactElement {
  const [name, setName] = useState('');
  const [isActiveCreate, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(name !== '');
  }, [name]);

  return (
    <>
      <Modal.Header>some</Modal.Header>
      <Modal.Content>
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          label={'Имя задачи'}
          placeholder={'Имя задачи'}
          style={{ width: '100%' }}
        />
      </Modal.Content>
      <Modal.Actions>
        <Button disabled={!isActiveCreate} primary={true} onClick={() => onCreate(name)}>
          Создать
        </Button>
      </Modal.Actions>
    </>
  );
}
