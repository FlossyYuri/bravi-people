import { Controller, Get, Param } from '@nestjs/common';

@Controller('contacts')
export class ContactsController {
  @Get()
  findAll(): string {
    return 'This action returns all contacts';
  }

  @Get()
  findOne(@Param('id') id: number): string {
    return 'This action returns one contact';
  }
}
