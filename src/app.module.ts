import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/login/user.module';
import { UserCadastroModule } from './user/cadastro/user.cadastro.module';

@Module({
  imports: [UserModule, UserCadastroModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
