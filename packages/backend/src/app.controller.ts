import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api/v1/status')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    return this.appService.getHello();
  }
}