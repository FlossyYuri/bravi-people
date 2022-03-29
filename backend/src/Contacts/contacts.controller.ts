import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { ContactUpdateDto } from './dto/contact-update.dto';
import { ContactDto } from './dto/contact.dto';
import { Contact } from './interfaces/contacts.interface';

@Controller('contacts')
export class ContactsController {
  constructor(private contactsServices: ContactsService) {}
  @Get()
  async findAll(): Promise<Contact[]> {
    return await this.contactsServices.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Contact> {
    return await this.contactsServices.findOne(id);
  }

  @Post()
  async create(@Body() contact: ContactDto): Promise<Contact> {
    return await this.contactsServices.create(contact);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() contact: ContactUpdateDto,
  ): Promise<number[]> {
    return await this.contactsServices.update(id, contact);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<number> {
    return await this.contactsServices.delete(id);
  }
}
