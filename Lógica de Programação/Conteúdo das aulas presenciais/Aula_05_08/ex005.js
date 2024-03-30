const numbers = [1, 2, 3, 4, 5, 8, 9, 10, 14];

console.log(`Array original: ${numbers.join(', ')}`);

numbers.unshift(-1);
console.log(`\nAdicionando o -1 ao início do array: ${numbers.join(', ')}`);

console.log(`\nRemovendo o último elemendo do array: ${numbers.pop()}`);
console.log(`Array depois da remoção do elemento: ${numbers.join(', ')}`);

console.log(`\nRemovendo os números 5, 8 e 9: ${numbers.splice(5, 3).join(', ')}`);
console.log(`Array depois da remoção do elemento: ${numbers.join(', ')}`);

numbers.push(50, 60, 70);
console.log(`\nAdicionando os números 50, 60, 70 ao final do array: ${numbers.join(', ')}`);

console.log(`\nRemovendo o primeiro elemento do array: ${numbers.shift()}`);
console.log(`Array depois da remoção do elemento: ${numbers.join(', ')}`);