import React, { useCallback, useRef, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import CellIcon from '../../assets/svgs/cell';
import DeleteIcon from '../../assets/svgs/delete';
import EditIcon from '../../assets/svgs/edit';
import GMailIcon from '../../assets/svgs/gmail';
import OptionsIcon from '../../assets/svgs/options';
import WhatsAppIcon from '../../assets/svgs/whatsapp';
import { TOAST_STYLE } from '../../constants';
import { useContact } from '../../context/useContacts';
import { Contact } from '../../interfaces/common';
import ContactForm from '../../pages/Contacts/form';
import { APIKit } from '../../services/api';
import ConfirmationModal from '../Modals/Confirmations';
import CardDropdown from './CardDropdown';

function ContactRow({
  id,
  firstName,
  lastName,
  email,
  phoneNumber,
  whatsapp,
}: Contact) {
  const [isVisible, setVisibility] = useState(false);
  const [formModal, setFormModal] = useState(false);
  const [removeModal, setRemoveModal] = useState(false);
  const { fetchData } = useContact();
  const toggleDropdown = useCallback(
    () => setVisibility(!isVisible),
    [isVisible]
  );
  const close = useCallback(() => setRemoveModal(false), []);
  const options = useRef<HTMLButtonElement>(null);
  return (
    <article className='bg-white flex flex-col rounded-xl overflow-hidden p-4'>
      <div className='flex items-center justify-between flex-wrap gap-4 overflow-hidden'>
        <div className='flex items-center gap-4'>
          <div className='w-10 h-10 bg-main-gray rounded-full flex justify-center items-center'>
            <div className='w-full h-full scale-90 bg-transparent border border-white rounded-full flex justify-center items-center'>
              <span className='text-xl font-bold flex items-center'>{`${firstName[0]}${lastName[0]}`}</span>
            </div>
          </div>
          <span className='font-xl font-bold h-min'>{`${firstName} ${lastName}`}</span>
        </div>
        <div className='flex ml-4 gap-4'>
          <a href={`mailto:${email}`} className='scale-90'>
            <GMailIcon />
          </a>
          <a
            href={`https://wa.me/${whatsapp?.replaceAll(' ', '')}`}
            className='scale-90'
          >
            <WhatsAppIcon />
          </a>
          <a
            href={`tel:${phoneNumber?.replaceAll(' ', '')}`}
            className='scale-90'
          >
            <CellIcon />
          </a>
          <button
            onClick={toggleDropdown}
            ref={options}
            className={`transition-all rounded-lg hover:shadow-custom self-end ${
              isVisible ? 'shadow-custom' : ''
            }`}
          >
            <OptionsIcon />
          </button>
        </div>
      </div>
      <CardDropdown
        parentRef={options}
        close={() => setVisibility(false)}
        visibility={isVisible}
        items={[
          {
            onClick: () => {
              setFormModal(true);
            },
            text: 'Edit',
            icon: (
              <EditIcon className='transition-all fill-main-text group-hover:fill-white' />
            ),
          },
          {
            onClick: () => {
              setRemoveModal(true);
            },
            text: 'Delete',
            icon: (
              <DeleteIcon className='transition-all fill-main-text group-hover:fill-white' />
            ),
          },
        ]}
      />
      <Toaster
        toastOptions={{
          style: TOAST_STYLE,
        }}
      />
      {formModal ? (
        <ContactForm
          contact={{ id, firstName, lastName, email, phoneNumber, whatsapp }}
          update
          close={() => {
            setFormModal(false);
            fetchData();
          }}
        />
      ) : null}
      {removeModal ? (
        <ConfirmationModal
          title='Want to remove?'
          description='Are you sure that you want to delete?'
          confirm={{
            onClick: () => {
              APIKit.delete(`contacts/${id}`)
                .then(() => toast.success('Contact Removed!'))
                .catch(() => toast.error('Erro ao remover contacto!'))
                .finally(() => {
                  fetchData();
                  close();
                });
            },
            text: 'Delete',
          }}
          cancel={{
            onClick: () => {
              close();
            },
            text: 'Cancel',
          }}
        />
      ) : null}
    </article>
  );
}

export default ContactRow;
