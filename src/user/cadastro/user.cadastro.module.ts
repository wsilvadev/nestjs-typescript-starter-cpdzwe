import { Module } from '@nestjs/common';
import { UserCadastroController } from './user.cadastro.controller';
import { UserCadastroService } from './user.cadastro.service';
import {UserCadastroImplementation} from './user.cadastro.implementation';
import { UserCadastro } from './user.cadastro';

@Module({
  imports: [],
  controllers: [UserCadastroController],
  providers: [
    UserCadastroService,
    //UserLoginImplementation,
    { provide: UserCadastro, useClass: UserCadastroImplementation },
  ],
})
export class UserCadastroModule {}
