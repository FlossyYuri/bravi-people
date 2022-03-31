import { Inject, Injectable } from '@nestjs/common';
import { Contact } from 'src/contacts/contact.entity';
import { CONTACT_REPOSITORY } from '../core/constants';
import { DashboardDto } from './dto/dashboard.dto';

@Injectable()
export class DashboardService {
  constructor(
    @Inject(CONTACT_REPOSITORY)
    private readonly contactRepository: typeof Contact,
  ) {}

  async findAll(): Promise<DashboardDto> {
    return { totalContacts: await this.contactRepository.count() };
  }
}
