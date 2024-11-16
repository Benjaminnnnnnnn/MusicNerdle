import { Controller, Get, Body } from '@nestjs/common';
import { user } from 'src/types';
import { DatabaseService } from '../../services';

@Controller('db')
export class DatabaseController {
  constructor(private readonly DatabaseService: DatabaseService) {}
  @Get()
  async connedctDB() {
    await this.DatabaseService.connectDB();
  }
  @Get('/new')
  async createUser(@Body() createUserInfo: user) {
    await this.DatabaseService.createUser(createUserInfo);
  }
  @Get('/user')
  async getInfo() {
    await this.DatabaseService.getUserInfo();
  }
}
