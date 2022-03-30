import React from 'react';
import Button from '../Forms/Buttons/button';
import ModalCore from './core';

interface ButtonInterface {
  onClick: () => void;
  text: string;
}
interface Props {
  title: string;
  description: string;
  confirm: ButtonInterface;
  cancel: ButtonInterface;
}
function ConfirmationModal({ title, description, confirm, cancel }: Props) {
  return (
    <ModalCore>
      <div className='bg-white rounded-lg max-w-full w-modal p-8 relative'>
        <h1 className='text-2xl font-bold'>{title}</h1>
        <p>{description}</p>
        <div className='flex mt-4 gap-4'>
          <Button onClick={cancel.onClick} alt>
            {cancel.text}
          </Button>
          <Button onClick={confirm.onClick}>{confirm.text}</Button>
        </div>
      </div>
    </ModalCore>
  );
}

export default ConfirmationModal;
