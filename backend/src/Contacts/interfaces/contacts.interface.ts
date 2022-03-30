export interface Contact {
  firstName: string;
  lastName: string;
  email?: string;
  phoneNumber?: string;
  whatsapp?: string;
}
export interface ContactQuery {
  firstName?: string;
  lastName?: string;
  sort?: 'ASC' | 'DESC';
}
