var FactoryPc = /** @class */ (function () {
    function FactoryPc(type) {
        this.ram = '8GB';
        this.hdd = '500GB';
        this.cpu = '3.90GHz';
        this.type = type;
    }
    FactoryPc.prototype.getRam = function () { return this.ram; };
    FactoryPc.prototype.getHdd = function () { return this.hdd; };
    FactoryPc.prototype.getCpu = function () { return this.cpu; };
    FactoryPc.prototype.getType = function () { return this.type; };
    FactoryPc.prototype.toString = function () {
        console.log("Ram: ".concat(this.ram));
        console.log("HDD: ".concat(this.hdd));
        console.log("CPU: ".concat(this.cpu));
        console.log("Type: ".concat(this.type, "\n"));
    };
    return FactoryPc;
}());
var FactoryServer = /** @class */ (function () {
    function FactoryServer(type) {
        this.ram = '32GB';
        this.hdd = '750GB';
        this.cpu = '4.90GHz';
        this.type = type;
    }
    FactoryServer.prototype.getRam = function () { return this.ram; };
    FactoryServer.prototype.getHdd = function () { return this.hdd; };
    FactoryServer.prototype.getCpu = function () { return this.cpu; };
    FactoryServer.prototype.getType = function () { return this.type; };
    FactoryServer.prototype.toString = function () {
        console.log("Ram: ".concat(this.ram));
        console.log("HDD: ".concat(this.hdd));
        console.log("CPU: ".concat(this.cpu));
        console.log("Type: ".concat(this.type, "\n"));
    };
    return FactoryServer;
}());
var Factory = /** @class */ (function () {
    function Factory() {
    }
    Factory.prototype.factoryProduto = function (type) {
        switch (type) {
            case 'PC':
                return new FactoryPc(type);
            case 'SERVER':
                return new FactoryServer(type);
            default:
                return null;
        }
    };
    return Factory;
}());
var factory = new Factory();
var computador1 = factory.factoryProduto('PC');
var computador2 = factory.factoryProduto('SERVER');
if (computador1) {
    computador1.toString();
}
else {
    console.log('Tipo inválido!');
}
if (computador2) {
    computador2.toString();
}
else {
    console.log('Tipo inválido!');
}
