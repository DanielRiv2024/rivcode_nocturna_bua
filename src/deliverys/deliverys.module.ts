import { Module } from '@nestjs/common';
import { DeliverysService } from './deliverys.service';
import { DeliverysController } from './deliverys.controller';

@Module({
  providers: [DeliverysService],
  controllers: [DeliverysController]
})
export class DeliverysModule {}
