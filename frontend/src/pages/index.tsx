import React from 'react';
import ArrowUpDownIcon from '../assets/svgs/arrowUpDown';
import AlternativeButton from '../components/Buttons/alternativeButton';
import Button from '../components/Buttons/button';
import ContactCard from '../components/Contacts/Card';

function Contacts() {
  return (
    <section className='p-8'>
      <h1 className='font-bold text-2xl'>Contacts</h1>
      <div className='flex mt-2 mb-8'>
        <AlternativeButton className='flex items-center text-main-text'>
          A-Z <ArrowUpDownIcon className='ml-2' />
        </AlternativeButton>
        <Button onClick={(e) => console.log(e)}>Adicionar</Button>
      </div>
      <section className='grid grid-cols-3'>
        <ContactCard
          email='emerson.yur@gmail.com'
          phoneNumber='+55 (11) 1903 892'
          firstName='Emerson'
          lastName='Yuri'
          whatsapp='+55 (11) 1903 892'
        />
      </section>
    </section>
  );
}

export default Contacts;
