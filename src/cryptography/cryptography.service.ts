import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class CryptographyService {
  async getHashedValue(plaintext): Promise<string> {
    const saltOrRounds = 14;
    const hash = await bcrypt.hash(plaintext, saltOrRounds);
    return hash;
  }

  async compareHashedValues(plaintext, hashedvalue): Promise<boolean> {
    const isMatch = await bcrypt.compare(plaintext, hashedvalue);
    return isMatch;
  }
}
