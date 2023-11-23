import { UserLogin } from './user.login';

export class UserLoginFake implements UserLogin {
  async login(email: string): Promise<string> {
    console.log('essa funçao salva em memória');
    return email;
  }
}
