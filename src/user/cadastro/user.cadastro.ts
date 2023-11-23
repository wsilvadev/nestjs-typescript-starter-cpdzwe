export abstract class UserCadastro {
    abstract cadastro(email: string, senha: string): Promise<string>;
}