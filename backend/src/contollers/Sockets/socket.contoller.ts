import { Controller, Get, Param } from '@nestjs/common';
import { SocketService } from 'src/services';
import io from 'socket.io';
import axios from 'axios';

@Controller()
export class SocketController {
  constructor(private readonly SocketService: SocketService) {}
}
