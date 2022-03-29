import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { ContactDto } from './dto/contact.dto';
import { Contact } from './interfaces/contacts.interface';

@Controller('contacts')
export class ContactsController {
  constructor(private contactsServices: ContactsService) {}
  @Get()
  async findAll(): Promise<Contact[]> {
    return await this.contactsServices.findAll();
  }

  @Get()
  findOne(@Param('id') id: number): Contact {
    return this.contactsServices.findAll()[0];
  }

  @Post()
  async create(@Body() contact: ContactDto): Promise<Contact> {
    return await this.contactsServices.create(contact);
  }
}
