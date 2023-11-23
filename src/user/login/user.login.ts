export abstract class UserLogin {
  abstract login(email: string): Promise<string>;
}
