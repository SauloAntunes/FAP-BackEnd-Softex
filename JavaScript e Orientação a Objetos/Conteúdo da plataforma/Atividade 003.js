let variavel_boolean;
let variavel_big_int;
let variavel_string;
let variavel_symbol;

console.log(`Variável boolean: ${variavel_boolean}`);
console.log(`Variável BigInt: ${variavel_big_int}`);
console.log(`Variável string: ${variavel_string}`);
console.log(`Variável symbol: ${variavel_symbol}`);

variavel_boolean = null;
variavel_big_int = null;
variavel_string = null;
variavel_symbol = null;

console.log(`\nVariável boolean: ${variavel_boolean}`);
console.log(`Variável BigInt: ${variavel_big_int}`);
console.log(`Variável string: ${variavel_string}`);
console.log(`Variável symbol: ${variavel_symbol}`);

variavel_boolean = true;
variavel_big_int = BigInt(9007199254740991);
variavel_string = 'JavaScript';
variavel_symbol = Symbol('Back-End');

console.log(`\nVariável boolean: ${variavel_boolean}`);
console.log(`Variável BigInt: ${variavel_big_int}`);
console.log(`Variável string: ${variavel_string}`);
console.log(variavel_symbol);