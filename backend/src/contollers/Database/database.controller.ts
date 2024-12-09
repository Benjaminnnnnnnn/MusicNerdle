import { Controller, Get, Body, Post, Param } from '@nestjs/common';
import { DatabaseService } from '../../services';

interface signUpData {
  email: string;
  username: string;
  password: string;
}
@Controller('db')
export class DatabaseController {
  constructor(private readonly DatabaseService: DatabaseService) {}
  @Get()
  async connedctDB() {
    await this.DatabaseService.connectDB();
  }
  @Post('/new')
  async createUser(@Body() body: signUpData) {
    const { email, username, password } = body;
    console.log(email, username, password, 'Fuck u');
    await this.DatabaseService.createUser(email, username, password);
  }
  @Get('/user')
  async getInfo() {
    await this.DatabaseService.getUserInfo();
  }
}
