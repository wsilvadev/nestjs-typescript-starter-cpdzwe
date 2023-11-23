import { Injectable } from '@nestjs/common';
import { UserLogin } from './user.login';

@Injectable()
export class UserService {
  constructor(private userLogin: UserLogin) {}
  async login(email: string) {
    const user = await this.userLogin.login(email);
    return user;
  }
}
