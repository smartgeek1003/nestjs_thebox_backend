import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { JWTStrategy } from './jwt.strategy'
import { CryptographyModule } from 'src/cryptography/cryptography.module';
import { CryptographyService } from 'src/cryptography/cryptography.service';

@Module({
  imports: [UsersModule, PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '180s' }
    }),
    CryptographyModule],
  providers: [AuthService, LocalStrategy, JWTStrategy, CryptographyService],
  controllers: [AuthController],
  exports: [AuthService]
})
export class AuthModule { }
