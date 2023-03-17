import { Controller } from '@nestjs/common';
import { ClientKafka, KafkaContext } from '@nestjs/microservices';
import {
  Client,
  Ctx,
  MessagePattern,
  Payload,
} from '@nestjs/microservices/decorators';
import { KAFKA_CONFIG } from './config';
import { EventPayload } from './EventDto';

@Controller()
export class AppController {
  constructor() {}
  @Client(KAFKA_CONFIG)
  client: ClientKafka;
  async onModuleInit() {
    await this.client.connect();
  }
  @MessagePattern('MyFirstTopic') // Our topic name
  getMyFirstTopic(@Payload() payloads: EventPayload[], @Ctx() context: KafkaContext): void {
    for(const payload of payloads){
      this.ProcessAndEmit(payload,context);
    }
  }
  ProcessAndEmit(payload: EventPayload,context: KafkaContext){
    console.log('Processing the payload: ' + JSON.stringify(payload));
    payload.myNewField = 'myNewValue';
    this.client.emit('MySecondTopic', JSON.stringify([payload]));
    console.log('Emited the processed payload to MySecondTopic');
  }
}
