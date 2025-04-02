import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateEventDto } from './dto/create-event.dto';
import { faker } from '@faker-js/faker';
import {
  EventType,
  NodePlatform,
  NodeType,
  Protocol,
  Result,
} from './event.enum';

@Injectable()
export class EventService {
  constructor(@InjectModel(Event.name) private eventModel: Model<Event>) {}

  async createMany(count: number = 1000): Promise<void> {
    const fakeEvents: CreateEventDto[] = [];

    for (let i = 0; i < count; i++) {
      fakeEvents.push({
        nodeType: faker.helpers.arrayElement(Object.values(NodeType)),
        nodeId: faker.string.uuid(),
        nodeName: faker.internet.domainName(),
        nodeAddress: faker.internet.ip(),
        nodeHost: faker.internet.domainWord(),
        nodePlatform: faker.helpers.arrayElement(Object.values(NodePlatform)),
        nodeOsVersion: faker.system.semver(),
        nodeAgentVersion: `v${faker.system.semver()}`,
        nodeLinkedServer: 'default',

        eventType: faker.helpers.arrayElement(Object.values(EventType)),
        userId: faker.string.uuid(),
        userName: faker.person.fullName(),
        loginAccount: faker.internet.userName(),
        clientIp: faker.internet.ip(),
        sessionId: faker.string.uuid(),
        summary: faker.lorem.sentence(),
        description: faker.lorem.paragraph(),
        sessionDeviceId: faker.string.uuid(),
        sid: faker.string.alphanumeric(8),
        pid: faker.string.numeric(4),

        protocol: faker.helpers.arrayElement(Object.values(Protocol)),
        result: faker.helpers.arrayElement(Object.values(Result)),

        loginAt: faker.date.past().getTime(),
        occurredAt: faker.date.recent().getTime(),
        savedAt: Date.now(),
      });
    }

    await this.eventModel.insertMany(fakeEvents);
  }
}
