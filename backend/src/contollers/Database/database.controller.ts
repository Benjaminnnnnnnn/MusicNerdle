import { Controller, Get } from '@nestjs/common';
import { DatabaseService } from '../../services';

@Controller('db')
export class DatabaseController {
  constructor(private readonly DatabaseService: DatabaseService) {}
  @Get()
  async connedctDB() {
    await this.DatabaseService.connectDB();
  }
  @Get('/new')
  async createUser() {
    await this.DatabaseService.createUser();
  }
  @Get('/user')
  async getInfo() {
    await this.DatabaseService.getUserInfo();
  }
}
