import { ClientProvider, Transport } from '@nestjs/microservices';

export const KAFKA_CONFIG = {
  transport: Transport.KAFKA,
  options: {
    client: {
      clientId: 'my-dev-client-id',
      brokers: ['192.168.1.108:29092'],
      ssl: false,
      sasl: null,
    },
    consumer: {
      groupId: 'my-dev-group-id',
    },
  },
} as ClientProvider;
