export interface IconProps {
  className?: string;
}

export interface ButtonInterface {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
  type?: 'button' | 'reset' | 'submit' | undefined;
  className?: string;
  active?: boolean;
  alt?: boolean;
}

export interface Contact {
  id: number;
  firstName: string;
  lastName: string;
  email?: string;
  phoneNumber?: string;
  whatsapp?: string;
}
export interface DashboardInterface {
  totalContacts: number;
}
