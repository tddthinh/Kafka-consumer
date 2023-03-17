import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { KAFKA_CONFIG } from './config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  startEvent(app);
  await app.listen(4000);
}
async function startEvent(app: INestApplication) {
  app.connectMicroservice(KAFKA_CONFIG);
  await app.startAllMicroservices();
}
bootstrap();
