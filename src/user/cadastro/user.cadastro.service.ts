import { Injectable } from '@nestjs/common';
import { UserCadastro } from './user.cadastro';

@Injectable()
export class UserCadastroService {
  constructor(private userCadastro: UserCadastro) {}
  async cadastro(email: string, senha: string) {
    const user = await this.userCadastro.cadastro(email, senha);
    return user;
  }
}
