class Veiculo{
    constructor(modelo, marca, cor, numeroRodas){
        this.modelo = modelo;
        this.marca = marca;
        this.cor = cor;
        this.numeroRodas = numeroRodas;
    }

    clone(){}

    represent(){}
}


class VeiculoA extends Veiculo{
    constructor(modelo, marca, cor, numeroRodas, ano){
        super(modelo, marca, cor, numeroRodas);
        this.ano = ano;
    }
    
    clone(){
        return new VeiculoA(this.modelo, this.marca, this.cor, this.numeroRodas, this.ano);
    }
    
    represent(){
        console.log(`
        Modelo.........: ${this.modelo}
        Marca..........: ${this.marca}
        Cor............: ${this.cor}
        Número de Rodas: ${this.numeroRodas}
        Ano............: ${this.ano}\n`);
    }
}


class VeiculoB extends Veiculo{
    constructor(modelo, marca, cor, numeroRodas, numeroPortas){
        super(modelo, marca, cor, numeroRodas);
        this.numeroPortas = numeroPortas;
    }
    
    clone(){
        return new VeiculoB(this.modelo, this.marca, this.cor, this.numeroRodas, this.numeroPortas);
    }
    
    represent(){
        console.log(`
        Modelo..........: ${this.modelo}
        Marca...........: ${this.marca}
        Cor.............: ${this.cor}
        Número de Rodas.: ${this.numeroRodas}
        Número de Portas: ${this.numeroPortas}\n`);
    }
}


let veiculos = [];
class Aplicacao{
    constructor(){
        const veiculoA = new VeiculoA('A', 'ABC', 'Preto', 4, 2015);
        const veiculoB = new VeiculoB('B', 'CBA', 'Branco', 4, 2);
        
        for(let i = 0; i < 3; i++){
            veiculos.push(veiculoA.clone(), veiculoB.clone());
        }
    }

    mostrarVeiculos(){
        veiculos.forEach(veiculo => {
            veiculo.represent();
        });
    }
}


let Prototype = new Aplicacao();

Prototype.mostrarVeiculos();