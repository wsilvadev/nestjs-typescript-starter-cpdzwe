import { UserLogin } from './user.login';

export class UserLoginImplementation implements UserLogin {
  async login(email: string): Promise<string> {
    console.log('essa função bateu no backand');
    return email;
  }
}
