import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { UserLoginFake } from './user.login.fake';

describe('UserController', () => {
  let userService: UserService;
  let userLoginFake: UserLoginFake;
  beforeAll(async () => {
    userLoginFake = new UserLoginFake();
    userService = new UserService(userLoginFake);
  });

  describe('getHello', () => {
    it('should return "Hello World!"', async () => {
      const login = await userService.login('@teste');
      expect(login).toBe('@teste');
    });
  });
});
