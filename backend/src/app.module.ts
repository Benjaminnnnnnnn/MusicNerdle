import { Module } from '@nestjs/common';
import {
  HelloWorldController,
  SpotifyController,
  DatabaseController,
} from './contollers';
import { HelloWorldService, SpotifyService, DatabaseService } from './services';

@Module({
  imports: [],
  controllers: [HelloWorldController, SpotifyController, DatabaseController],
  providers: [HelloWorldService, SpotifyService, DatabaseService],
})
export class AppModule {}
