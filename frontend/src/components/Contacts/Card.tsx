import React, { useCallback, useRef, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import CellIcon from '../../assets/svgs/cell';
import ChecklistIcon from '../../assets/svgs/checklist';
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

function ContactCard({
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
    <article className='bg-white flex flex-col rounded-xl overflow-hidden'>
      <div className='flex w-full px-4 mt-4 justify-between'>
        <button className='group transition-all border border-main-dark-gray hover:border-main-blue w-9 h-9 flex justify-center items-center rounded-lg'>
          <ChecklistIcon className='transition-all fill-main-dark-gray group-hover:fill-main-blue' />
        </button>
        <button
          onClick={toggleDropdown}
          ref={options}
          className={`transition-all rounded-lg hover:shadow-custom ${
            isVisible ? 'shadow-custom' : ''
          }`}
        >
          <OptionsIcon />
        </button>
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
      <div className='px-4 -mt-4 mb-4 w-full flex flex-col items-center'>
        <div className='w-24 h-24 bg-main-gray rounded-full flex justify-center items-center'>
          <div className='w-full h-full scale-90 bg-transparent border border-white rounded-full flex justify-center items-center'>
            <span className='text-7xl font-bold'>#</span>
          </div>
        </div>
        <p className='font-xl font-bold'>{`${firstName} ${lastName}`}</p>
        <p>{email}</p>
        <p>{phoneNumber}</p>
      </div>
      <div className='w-full py-1 bg-main-gray flex justify-evenly'>
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
      </div>
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

export default ContactCard;
