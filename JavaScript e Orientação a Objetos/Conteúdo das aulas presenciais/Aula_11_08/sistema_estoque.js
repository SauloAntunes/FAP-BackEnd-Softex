/* 
O projeto deve ser feito usando os conceitos:
    - POO
    - Arrays
    - Objetos
Faça um programa onde posso cadastrar, excluir e mostrar.
*/

class SistemaEstoque{
    constructor(){
        this.estoque_geral = [];
    }

    cadastrar(codigo_produto, nome_produto, preco_produto, quantidade_produto){
        let produto = {
            codigo: codigo_produto,
            nome: nome_produto,
            preco: preco_produto,
            quantidade: quantidade_produto
        }

        this.estoque_geral.push(produto);
    }

    listar(){
        console.log(`=-=-=-=-=-=-=-=-=-=-=-=-=`);
        this.estoque_geral.forEach(produto =>{
            console.log(`Código....: ${produto.codigo}`);
            console.log(`Nome......: ${produto.nome.toUpperCase()}`);
            console.log(`Preço.....: R$${produto.preco.toFixed(2)}`);
            console.log(`Quantidade: ${produto.quantidade}`);
            console.log(`=-=-=-=-=-=-=-=-=-=-=-=-=`);
        });
    }

    excluir(codigo){
        let indice_produto = -1;
        
        this.estoque_geral.forEach(produto =>{
            if(produto.codigo === codigo){
                indice_produto = this.estoque_geral.indexOf(produto);
            }
        });

        if(indice_produto !== -1){
            console.log(`\nO produto ${this.estoque_geral[indice_produto].nome} foi removido.\n`);
            this.estoque_geral.splice(indice_produto, 1);
        }else{
            console.log(`\nO produto com o código ${codigo} não foi encontado!\n`);
        }
    }
}


let estoque = new SistemaEstoque();

estoque.cadastrar(123, 'Sal', 2, 50);
estoque.cadastrar(456, 'Pimenta', 1, 30);

estoque.listar();

estoque.excluir(456);
estoque.excluir(456);

estoque.listar();
