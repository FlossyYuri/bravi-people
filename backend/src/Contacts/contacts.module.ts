import { Module } from '@nestjs/common';
import { contactsProviders } from './contact.provider';
import { ContactsController } from './contacts.controller';
import { ContactsService } from './contacts.service';

@Module({
  controllers: [ContactsController],
  providers: [ContactsService, ...contactsProviders],
})
export class ContactsModule {}
