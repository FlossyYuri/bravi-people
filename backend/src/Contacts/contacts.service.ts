import { Injectable } from '@nestjs/common';
import { Person } from './contacts.interface';

@Injectable()
export class ContactsService {
  private readonly contacts: Person[] = [];

  create(post: Person) {
    this.contacts.push(post);
  }

  findAll(): Person[] {
    return this.contacts;
  }
}
