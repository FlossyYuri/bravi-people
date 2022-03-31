import { Module } from '@nestjs/common';
import { contactsProviders } from 'src/contacts/contact.provider';
import { DatabaseModule } from 'src/core/database/database.module';
import { DashboardController } from './dashboard.controller';
import { DashboardService } from './dashboard.service';

@Module({
  imports: [DatabaseModule],
  controllers: [DashboardController],
  providers: [DashboardService, ...contactsProviders],
})
export class DashboardModule {}
