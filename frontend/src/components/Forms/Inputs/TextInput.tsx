import React from 'react';
import SearchIcon from '../../../assets/svgs/search';

interface TextInputProps {
  name: string;
  label?: string;
  placeholder: string;
  type: React.HTMLInputTypeAttribute;
  className?: string;
  disabled?: boolean;
  search?: boolean;
  error?: string;
  inputEvent?: (value: string) => void;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}
const TextInput = ({
  name,
  label,
  type,
  search,
  placeholder,
  onChange,
  inputEvent,
  className,
  disabled,
  error,
}: TextInputProps) => {
  const inputChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    if (inputEvent) inputEvent(event.target.value);
  };
  return (
    <div className={`${className}`}>
      <label htmlFor={name} className='control-label'>
        {label}
      </label>
      <div className='flex rounded-lg bg-main-input items-center px-4'>
        <input
          className='bg-transparent text-main-text py-2 focus:ring-0 focus:outline-none'
          id={name}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          onChange={onChange || inputChanged}
        />
        {search ? <SearchIcon /> : null}
      </div>
      {error ? <span>{error}</span> : null}
    </div>
  );
};
export default TextInput;
