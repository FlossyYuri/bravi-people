import React from 'react';
import { RegisterOptions, UseFormRegister } from 'react-hook-form';
import SearchIcon from '../../../assets/svgs/search';

interface TextInputProps {
  name: string;
  label?: string;
  placeholder: string;
  validation?: RegisterOptions;
  type?: React.HTMLInputTypeAttribute;
  className?: string;
  disabled?: boolean;
  search?: boolean;
  errors?: any;
  register: UseFormRegister<any>;
}
const TextInput = ({
  name,
  label,
  type = 'text',
  validation = {},
  placeholder,
  register,
  className = '',
  disabled,
  errors,
  search,
}: TextInputProps) => {
  return (
    <div className={`w-full ${className}`}>
      <label htmlFor={name} className='text-main-text'>
        {label}
      </label>
      <div className={`flex items-center `}></div>
      <div className='flex relative items-center'>
        <input
          className={`transition-all rounded-lg w-full bg-main-input bg-transparent text-main-text py-3 focus:shadow-main focus:ring-0 focus:outline-none px-4 ${
            label ? 'mt-2' : ''
          }`}
          id={name}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          {...register(name, validation)}
        />
        {search ? <SearchIcon className='absolute right-4' /> : null}
      </div>
      {errors && errors[name] ? (
        <span className='text-red-500 text-sm'>{errors[name].message}</span>
      ) : null}
    </div>
  );
};
export default TextInput;
