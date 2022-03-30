import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/core/database/database.module';
import { contactsProviders } from './contact.provider';
import { ContactsController } from './contacts.controller';
import { ContactsService } from './contacts.service';

@Module({
  imports: [DatabaseModule],
  controllers: [ContactsController],
  providers: [ContactsService, ...contactsProviders],
})
export class ContactsModule {}
