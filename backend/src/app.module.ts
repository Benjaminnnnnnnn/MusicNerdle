import { Module } from '@nestjs/common';
import { HelloWorldController } from './contollers';
import { HelloWorldService } from './services';

@Module({
  imports: [],
  controllers: [HelloWorldController],
  providers: [HelloWorldService],
})
export class AppModule {}
