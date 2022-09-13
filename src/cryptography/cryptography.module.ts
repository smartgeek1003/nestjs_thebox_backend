import { Module } from '@nestjs/common';
import { CryptographyController } from './cryptography.controller';
import { CryptographyService } from './cryptography.service';

@Module({
  controllers: [CryptographyController],
  providers: [CryptographyService]
})
export class CryptographyModule {}
