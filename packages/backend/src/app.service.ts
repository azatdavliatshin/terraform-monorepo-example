import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): Record<'status', boolean> {
    return {
      status: true,
    };
  }
}
