import { HttpException, Injectable } from '@nestjs/common';
import { USERS } from './users.mock';

@Injectable()
export class UsersService {
  users = USERS;
  async find_user(username: string): Promise<any> {
    return new Promise(resolve => {
      console.log("Using Username: %s", username);
      const user = this.users.find(user => user.username === username);
      if (!user) {
        throw new HttpException('User Does Not Exist!!', 404)
      }
      console.log("Resolving User", user);
      resolve(user);
    })
  }
}
