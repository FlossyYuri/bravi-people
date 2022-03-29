import { IsEmail, IsNotEmpty } from 'class-validator';

export class ContactDto {
  @IsNotEmpty()
  readonly firstName: string;

  @IsNotEmpty()
  readonly lastName: string;
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;
  readonly phoneNumber: string;
  readonly whatsapp: string;
}
