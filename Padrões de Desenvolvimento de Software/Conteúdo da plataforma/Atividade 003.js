class Sanduiche{
    constructor(){
        this.sanduiche;
    }

    preco(){}
}


class FrangoAssado extends Sanduiche{
    constructor(){
        super();
    }

    preco(){
        return 4.50;
    }
}


class Pepperoni extends Sanduiche{
    constructor(sanduiche){
        super();
        this.sanduiche = sanduiche;
    }

    preco(){
        return this.sanduiche.preco() + 0.99;
    }
}


class QueijoMussarelaRalado extends Sanduiche{
    constructor(sanduiche){
        super();
        this.sanduiche = sanduiche;
    }

    preco(){
        return this.sanduiche.preco() + 2.00;
    }
}


let meuSanduiche = new FrangoAssado();
console.log(`Meu sanduiche com Frango Assado custará: R$${meuSanduiche.preco()}.`);

meuSanduiche = new Pepperoni(meuSanduiche);
console.log(`Meu sanduiche com Frango Assado e Pepperoni custará: R$${meuSanduiche.preco()}.`);

meuSanduiche = new QueijoMussarelaRalado(meuSanduiche);
console.log(`Meu sanduiche com Frango Assado, Pepperoni e Queijo Mussarela Ralado custará: R$${meuSanduiche.preco()}.`);