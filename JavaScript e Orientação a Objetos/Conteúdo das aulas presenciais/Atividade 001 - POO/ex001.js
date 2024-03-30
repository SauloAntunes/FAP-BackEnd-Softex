/*
Escreva uma classe cujos objetos representam alunos matriculados em 
uma disciplina. Cada objeto dessa classe deve guardar os seguintes 
dados do aluno: matrícula, nome, 2 notas de prova e 1 nota de trabalho.
Escreva os seguintes métodos para esta classe:

media => calcula a média final do aluno (cada prova tem peso 2,5 e o trabalho tem peso 2)
final => calcula quanto o aluno precisa para a prova final (retorna zero se ele não for para a final)
*/

class Aluno{
    constructor(matricula, nome, nota_1_prova, nota_2_prova, nota_trabalho){
        this.matricula = matricula;
        this.nome = nome;
        this.nota_1_prova = nota_1_prova;
        this.nota_2_prova = nota_2_prova;
        this.nota_trabalho = nota_trabalho;
    }

    media(){
        return (this.nota_1_prova * 2.5 + this.nota_2_prova * 2.5 + 
        this.nota_trabalho * 2) / (2.5 + 2.5 + 2);
    }

    final(media){
        if (media >= 7.0){
            return 0.0;
        }else{
            return 7 - media;
        }
    }
}


let aluno_1 = new Aluno(123, 'João', 9, 8, 7);

let media = aluno_1.media();

console.log(`Matrícula.......: ${aluno_1.matricula}`);
console.log(`Nome............: ${aluno_1.nome}`);
console.log(`Nota 1 da prova.: ${aluno_1.nota_1_prova.toFixed(2).replace('.', ',')}`);
console.log(`Nota 2 da prova.: ${aluno_1.nota_2_prova.toFixed(2).replace('.', ',')}`);
console.log(`Nota do trabalho: ${aluno_1.nota_trabalho.toFixed(2).replace('.', ',')}`);
console.log(`Média...........: ${media.toFixed(2).replace('.', ',')}`);

let final = aluno_1.final(media);

if(final == 0.0){
    console.log('\nNão vai para a prova final.');
}else{
    console.log(`\nVocê precisa de ${final.toFixed(2).replace('.', ',')} pontos para a prova final.`);
}
