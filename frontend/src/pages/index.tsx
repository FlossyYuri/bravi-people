import React, { useState } from 'react';
import ArrowUpDownIcon from '../assets/svgs/arrowUpDown';
import ContactCard from '../components/Contacts/Card';
import AlternativeButton from '../components/Forms/Buttons/alternativeButton';
import Button from '../components/Forms/Buttons/button';
import GridToggle from '../components/Forms/Inputs/GridToggle';
import { useContact } from '../context/useContacts';
import ContactForm from './Contacts/form';

function Contacts() {
  const [formModal, setFormModal] = useState(false);
  const { contacts, fetchData } = useContact();
  return (
    <section className='p-8'>
      <h1 className='font-bold text-2xl'>Contacts</h1>
      <div className='flex mt-2 mb-8 justify-between'>
        <div className='flex gap-4 flex-wrap'>
          {/* <TextInput
            name='search'
            placeholder='Search'
            type='text'
            onChange={() => {}}
          /> */}
          <AlternativeButton className='flex items-center text-main-text'>
            A-Z <ArrowUpDownIcon className='ml-2' />
          </AlternativeButton>
          <GridToggle />
        </div>
        <Button onClick={() => setFormModal(true)}>Add</Button>
      </div>
      <section className='grid grid-cols-3 gap-4'>
        {contacts.map((contact) => (
          <ContactCard key={contact.id} {...contact} />
        ))}
      </section>

      {formModal ? (
        <ContactForm
          close={() => {
            setFormModal(false);
            fetchData();
          }}
        />
      ) : null}
    </section>
  );
}

export default Contacts;
