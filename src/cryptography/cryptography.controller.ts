import { Controller, Post, Request } from '@nestjs/common';
import { CryptographyService } from './cryptography.service';

@Controller('cryptography')
export class CryptographyController {
  constructor(private readonly cryptographyService: CryptographyService) { }

  @Post('hash')
  async getHashedValue(@Request() req) {
    //console.log("Got Request Body", req['body']);
    return await this.cryptographyService.getHashedValue(req['body']['plaintext-value']);
  }

  @Post('compare')
  async compareHashedValues(@Request() req) {
    //console.log("Got Request Body", req['body']);
    return await this.cryptographyService.compareHashedValues(req['body']['plaintext-value'], req['body']['hashed-value']);
  }
}
