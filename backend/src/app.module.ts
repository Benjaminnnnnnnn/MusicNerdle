import { Module } from '@nestjs/common';
import { HelloWorldController, SpotifyController } from './contollers';
import { HelloWorldService, SpotifyService } from './services';

@Module({
  imports: [],
  controllers: [HelloWorldController, SpotifyController],
  providers: [HelloWorldService, SpotifyService],
})
export class AppModule {}
