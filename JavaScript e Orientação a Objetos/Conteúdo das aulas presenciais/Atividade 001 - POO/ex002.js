/*
Crie uma classe usuário que deve receber dois parâmetros no método 
construtor, e-mail e senha, e anotá-los em propriedades da classe.
*/

class Usuario{
    constructor(e_mail, senha){
        this.e_mail = e_mail;
        this.senha = senha;
    }

    consultar_usuario(){
        console.log(`E-mail: ${this.e_mail} - Senha: ${this.senha}`);
    }
}


let usuario_1 = new Usuario('meuemail@abc.com.br', 1234567890);

usuario_1.consultar_usuario();