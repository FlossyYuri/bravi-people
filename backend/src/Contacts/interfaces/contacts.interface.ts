export interface Contact {
  firstName: string;
  lastName: string;
  email?: string;
  phoneNumber?: string;
  whatsapp?: string;
}
export interface ContactQuery {
  name?: string;
  sort?: 'ASC' | 'DESC';
}
