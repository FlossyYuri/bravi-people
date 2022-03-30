import React, { useEffect, useState } from 'react';
import ArrowUpDownIcon from '../assets/svgs/arrowUpDown';
import ContactCard from '../components/Contacts/Card';
import AlternativeButton from '../components/Forms/Buttons/alternativeButton';
import Button from '../components/Forms/Buttons/button';
import GridToggle from '../components/Forms/Inputs/GridToggle';
import TextInput from '../components/Forms/Inputs/TextInput';
import { useContact } from '../context/useContacts';
import ContactForm from './Contacts/form';

interface Query {
  sort?: 'ASC' | 'DESC' | '';
  name?: string;
}
function Contacts() {
  const [formModal, setFormModal] = useState(false);
  const [grid, setToggle] = useState<boolean>(true);
  const [params, setParams] = useState<Query>({ sort: 'ASC' });
  const { contacts, fetchData } = useContact();
  useEffect(() => {
    fetchData(params);
  }, [params, fetchData]);
  return (
    <section className='p-8'>
      <h1 className='font-bold text-2xl'>Contacts</h1>
      <div className='flex mt-2 mb-8 justify-between flex-wrap'>
        <div className='grid grid-cols-2 w-full sm:w-auto sm:flex gap-4 flex-wrap'>
          <TextInput
            className='w-full sm:w-52 col-span-2'
            search
            onChange={(e) => setParams({ ...params, name: e.target.value })}
            name='search'
            placeholder='Search'
          />
          <AlternativeButton
            onClick={() =>
              setParams({
                ...params,
                sort: params?.sort === 'ASC' ? 'DESC' : 'ASC',
              })
            }
            active={params.sort === 'ASC'}
            className='flex items-center justify-center text-main-text'
          >
            A-Z <ArrowUpDownIcon className='ml-2' />
          </AlternativeButton>
          <GridToggle
            className='col-span-1 justify-center'
            grid={grid}
            toggle={() => {
              setToggle(!grid);
            }}
          />
        </div>
        <Button className='mt-4 sm:mt-0' onClick={() => setFormModal(true)}>
          Add
        </Button>
      </div>
      <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4'>
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
