import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }

  @Post('user')
  async find_user(@Request() req) {
    console.log("In auth/user");
    console.log("Got Request Body", req['body']);
    const resp = await this.authService.find_user(req['body'].username)
    console.log("Sending Response", resp)
    return resp;
  }

  @Post('password')
  async validate_password(@Request() req) {
    console.log("In auth/user");
    console.log("Got Request Body", req['body']);
    const resp = await this.authService.validate_password(req['body'].username, req['body'].password);
    console.log("Sending Response", resp)
    return resp;
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    console.log("Got Request Body", req['body']);
    return this.authService.login(req.user);
  }
}
