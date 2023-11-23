import { Controller, Get } from '@nestjs/common';
import { UserCadastroService } from './user.cadastro.service';

@Controller('/user')
export class UserCadastroController {
  constructor(private readonly userCadastroService: UserCadastroService) {}

  @Get('/cadastro')
  login() {
    return this.userCadastroService.cadastro('@teste1', 'senha');
  }
}
