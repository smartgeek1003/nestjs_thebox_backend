import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectsModule } from './projects/projects.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { CryptographyModule } from './cryptography/cryptography.module';

@Module({
  imports: [ProjectsModule, AuthModule, UsersModule, CryptographyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
