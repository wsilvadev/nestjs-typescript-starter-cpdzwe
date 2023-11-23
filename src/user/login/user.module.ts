import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserLoginImplementation } from './user.login.implementation';
import { UserLogin } from './user.login';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [
    UserService,
    //UserLoginImplementation,
    { provide: UserLogin, useClass: UserLoginImplementation },
  ],
})
export class UserModule {}
