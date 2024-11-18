import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DeliverysModule } from './deliverys/deliverys.module';

@Module({
  imports: [DeliverysModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
