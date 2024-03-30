let dadosClientes = [
    {'id': 420, 'nome': 'Dener', 'alimento': 'Sandubão de Bacon', 'bebida': 'Suco Limão'},
    {'id': 152, 'nome': 'Naiady', 'alimento': 'Sandubão Vegano', 'bebida': 'Suco Limão'},
    {'id': 29, 'nome': 'Marcio', 'alimento': 'Coxinha', 'bebida': 'Suco Limão'},
    {'id': 33, 'nome': 'Isabel', 'alimento': 'Sandubão de Picanha', 'bebida': 'Suco Limão'},
    {'id': 55, 'nome': 'José', 'alimento': 'Pizza', 'bebida': 'Refrigerante'},
];

let pedido = dadosClientes.find((dado)=>{
    return dado.id == 33
});

console.log(pedido);