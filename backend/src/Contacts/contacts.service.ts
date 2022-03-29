import { Inject, Injectable } from '@nestjs/common';
import { CONTACT_REPOSITORY } from 'src/core/constants';
import { Contact as ContactInterface } from './interfaces/contacts.interface';
import { Contact } from './contact.entity';

@Injectable()
export class ContactsService {
  constructor(
    @Inject(CONTACT_REPOSITORY)
    private readonly contactRepository: typeof Contact,
  ) {}

  async create(contact: ContactInterface) {
    return await this.contactRepository.create<Contact>(contact);
  }

  async findAll(): Promise<Contact[]> {
    return await this.contactRepository.findAll();
  }
}
