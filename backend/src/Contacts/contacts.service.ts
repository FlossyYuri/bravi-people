import { Inject, Injectable } from '@nestjs/common';
import { CONTACT_REPOSITORY } from '../core/constants';
import { Contact } from './contact.entity';
import { ContactUpdateDto } from './dto/contact-update.dto';
import { ContactDto } from './dto/contact.dto';

@Injectable()
export class ContactsService {
  constructor(
    @Inject(CONTACT_REPOSITORY)
    private readonly contactRepository: typeof Contact,
  ) {}

  async create(contact: ContactDto) {
    return await this.contactRepository.create<Contact>(contact);
  }

  async update(id, contact: ContactUpdateDto) {
    return await this.contactRepository.update(
      { ...contact },
      {
        where: {
          id,
        },
      },
    );
  }

  async delete(id: number) {
    return await this.contactRepository.destroy({ where: { id } });
  }

  async findAll(): Promise<Contact[]> {
    return await this.contactRepository.findAll();
  }
  async findOne(id: number): Promise<Contact> {
    return await this.contactRepository.findByPk(id);
  }
}
