interface Produto{
    ram: string;
    hdd: string;
    cpu: string;
    type: string;
    getRam(): void;
    getHdd(): void;
    getCpu(): void;
    getType(): void;
    toString(): void;
}

class FactoryPc implements Produto{
    ram: string;
    hdd: string;
    cpu: string;
    type: string;

    constructor(type: string){
        this.ram = '8GB';
        this.hdd = '500GB';
        this.cpu = '3.90GHz';
        this.type = type;
    }

    getRam(){return this.ram;}

    getHdd(){return this.hdd;}
    
    getCpu(){return this.cpu}
    
    getType(){return this.type}
    
    toString(){
        console.log(`Ram: ${this.ram}`);
        console.log(`HDD: ${this.hdd}`);
        console.log(`CPU: ${this.cpu}`);
        console.log(`Type: ${this.type}\n`);
    }
    
}

class FactoryServer implements Produto{
    ram: string;
    hdd: string;
    cpu: string;
    type: string;

    constructor(type: string){
        this.ram = '32GB';
        this.hdd = '750GB';
        this.cpu = '4.90GHz';
        this.type = type;
    }

    getRam(){return this.ram;}

    getHdd(){return this.hdd;}
    
    getCpu(){return this.cpu}
    
    getType(){return this.type}
    
    toString(){
        console.log(`Ram: ${this.ram}`);
        console.log(`HDD: ${this.hdd}`);
        console.log(`CPU: ${this.cpu}`);
        console.log(`Type: ${this.type}\n`);
    }
    
}

class Factory{
    factoryProduto(type: string){
        switch(type){
            case 'PC':
                return new FactoryPc(type);
            case 'SERVER':
                return new FactoryServer(type);
            default:
                return null;
        }
    }
}


const factory = new Factory();

let computador1 = factory.factoryProduto('PC');
let computador2 = factory.factoryProduto('SERVER');

if(computador1){
    computador1.toString();  
}else{
    console.log('Tipo inválido!');
}

if(computador2){
    computador2.toString();  
}else{
    console.log('Tipo inválido!');
}  
