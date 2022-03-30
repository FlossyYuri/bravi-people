import React, { useCallback, useContext, useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';
import { Contact } from '../interfaces/common';
import { APIKit } from '../services/api';

const ContactContext = React.createContext<ContactProviderProps | undefined>(
  undefined
);
interface Props {
  children: React.ReactNode;
}
interface ContactProviderProps {
  fetchData: () => void;
  contacts: Contact[];
  setContacts: (value: Contact[]) => void;
}
export const ContactProvider = ({ children }: Props) => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  const fetchData = useCallback(() => {
    APIKit.get<Contact[]>('/contacts').then(
      (response: AxiosResponse<Contact[]>) => {
        setContacts(response.data);
      }
    );
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const data: ContactProviderProps = { fetchData, contacts, setContacts };
  return (
    <ContactContext.Provider value={data}>{children}</ContactContext.Provider>
  );
};

export const useContact = () => {
  const context = useContext(ContactContext);
  if (context === undefined) {
    throw new Error('useContact can only be used inside ContactProvider');
  }
  return context;
};
