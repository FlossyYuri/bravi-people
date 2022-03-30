import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import toast, { Toaster } from 'react-hot-toast';
import * as yup from 'yup';
import Button from '../../components/Forms/Buttons/button';
import TextInput from '../../components/Forms/Inputs/TextInput';
import { Contact } from '../../interfaces/common';
import { ERROR_MESSAGES } from '../../constants';
import CloseIcon from '../../assets/svgs/close';
import { APIKit } from '../../services/api';
interface ContactFormInterface {
  close: () => void;
}
const schema = yup
  .object({
    firstName: yup
      .string()
      .min(3, 'Nome muito pequeno')
      .required(ERROR_MESSAGES.REQUIRED),
    lastName: yup
      .string()
      .min(3, 'Nome muito pequeno')
      .required(ERROR_MESSAGES.REQUIRED),
    email: yup.string().email('Email inválido'),
    phoneNumber: yup.string(),
    whatsapp: yup.string(),
  })
  .required();

function ContactForm({ close }: ContactFormInterface) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Contact>({
    resolver: yupResolver(schema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      whatsapp: '',
    },
  });
  return (
    <div className='fade-spawn bg-slate-700 bg-opacity-40 w-screen h-screen fixed top-0 left-0 z-20 flex items-center justify-center'>
      <form
        onSubmit={handleSubmit((data) => {
          APIKit.post('/contacts', data)
            .then(() => {
              close();
              toast.success('Contacto cadastrado com sucesso!');
            })
            .catch(() => {
              toast.error('Erro ao cadastrar contacto!');
            });
        })}
        className='bg-white rounded-lg max-w-full w-modal p-4 relative'
      >
        <button
          type='button'
          onClick={close}
          className='absolute right-6 top-6 fill-main-text'
        >
          <CloseIcon />
        </button>
        <div className='w-40 h-40 -mt-24 bg-main-gray rounded-full flex justify-center items-center mx-auto'>
          <div className='w-full h-full scale-90 bg-transparent border border-white rounded-full flex justify-center items-center'>
            <span className='text-8xl font-bold'>#</span>
          </div>
        </div>
        <h2 className='text-2xl font-bold mt-4'>Add a new Contact</h2>
        <div className='grid grid-cols-2 gap-4 w-full'>
          <TextInput
            label='First Name'
            name='firstName'
            placeholder='First Name'
            register={register}
            errors={errors}
            validation={{ required: true }}
          />
          <TextInput
            label='Last Name'
            placeholder='Last Name'
            name='lastName'
            register={register}
            errors={errors}
            validation={{ required: true }}
          />
          <TextInput
            className='col-span-2'
            label='Email'
            placeholder='Email'
            name='email'
            register={register}
            errors={errors}
          />
          <TextInput
            className='col-span-2'
            label='Phone Number'
            placeholder='Phone Number'
            name='phoneNumber'
            register={register}
            errors={errors}
          />
          <TextInput
            className='col-span-2'
            label='Whatsapp'
            placeholder='Whatsapp'
            name='whatsapp'
            register={register}
            errors={errors}
          />
        </div>
        <div className='flex mt-4 justify-center gap-4'>
          <Button onClick={() => close()} alt>
            Cancel
          </Button>
          <Button type='submit'>Save</Button>
        </div>
      </form>
      <Toaster />
    </div>
  );
}

export default ContactForm;
