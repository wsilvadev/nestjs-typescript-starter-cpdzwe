import { UserCadastro } from './user.cadastro';

export class UserCadastroImplementation implements UserCadastro {
  async cadastro(email: string, senha: string): Promise<string> {
    console.log('teste cadastro');
    return email + senha;
  }
}
