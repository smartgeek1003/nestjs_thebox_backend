import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { CryptographyService } from 'src/cryptography/cryptography.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService, private jwtService: JwtService, private cryptographyService: CryptographyService) { }

  async validateUser(username: string, password: string): Promise<any> {
    console.log("In auth/auth.service validateUser()")
    const user = await this.usersService.find_user(username);
    console.log("Comparing Hash For", password, user.password)
    const isMatch = await this.cryptographyService.compareHashedValues(password, user.password);
    if (user && isMatch) {
      console.log("Found User")
      const { password, ...result } = user;
      return result;
    }
    console.log("User Not Found!!")
    return null;
  }

  async validate_password(username: string, password: string): Promise<any> {
    console.log("In auth/auth.service validatePassword()")
    const user = await this.usersService.find_user(username);
    console.log("Comparing Hash For", password, user.password)
    const isMatch = await this.cryptographyService.compareHashedValues(password, user.password);
    if (user && isMatch) {
      console.log("Password Matched")
      return true;
    }
    console.log("Password did not Match!!")
    return false;
  }

  async find_user(username: string): Promise<any> {
    console.log("In auth/auth.service find_user()")
    const user = await this.usersService.find_user(username);
    if (user) {
      const { password, ...result } = user;
      console.log("User Found!!")
      return result;
    }
    console.log("User Not Found!!")
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      user: user.username,
      access_token: this.jwtService.sign(payload),
    };
  }
}
