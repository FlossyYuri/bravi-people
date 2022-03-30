import { Inject, Injectable } from '@nestjs/common';
import { Op } from 'sequelize';
import { WhereOptions, Order } from 'sequelize/types';
import { CONTACT_REPOSITORY } from '../core/constants';
import { Contact } from './contact.entity';
import { ContactUpdateDto } from './dto/contact-update.dto';
import { ContactDto } from './dto/contact.dto';
import { ContactQuery } from './interfaces/contacts.interface';

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

  async findAll(query: ContactQuery): Promise<Contact[]> {
    const { name, sort } = query;

    let where: WhereOptions<ContactDto> = {};
    const order: Order = [];
    const ors = [];
    if (name) {
      ors.push({
        firstName: {
          [Op.substring]: name,
        },
      });
      ors.push({
        lastName: {
          [Op.substring]: name,
        },
      });
    }
    if (ors.length) where = { [Op.or]: ors };

    if (sort && (sort === 'ASC' || sort === 'DESC'))
      order.push(['firstName', sort || 'ASC']);
    return await this.contactRepository.findAll({
      where,
      order,
    });
  }
  async findOne(id: number): Promise<Contact> {
    return await this.contactRepository.findByPk(id);
  }
}
