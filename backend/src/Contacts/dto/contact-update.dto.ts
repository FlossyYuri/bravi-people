import { IsEmail } from 'class-validator';

export class ContactUpdateDto {
  readonly firstName: string;
  readonly lastName: string;
  @IsEmail()
  readonly email?: string;
  readonly phoneNumber?: string;
  readonly whatsapp?: string;
}
