import React from 'react';
import ContactCard from '../components/Contacts/Card';

function Contacts() {
  return (
    <section className='p-8'>
      <h1 className='font-bold text-2xl'>Contacts</h1>
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
