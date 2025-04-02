import { Controller, Get, Post } from '@nestjs/common';
import { EventService } from './event.service';

@Controller('event')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Post('init')
  async initializeFakeEvents(): Promise<{ message: string }> {
    await this.eventService.createMany(1000);
    return { message: '1000 fake events created successfully.' };
  }

  @Get()
  async getAllEvents(): Promise<Event[]> {
    return this.eventService.findAll();
  }
}
