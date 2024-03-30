const prompt = require('readline-sync');

class Editor {
    constructor() {
        this.linhas = [];
    }

    insertLine(lineNumber, text){
        this.linhas.splice(lineNumber, 0, text);
    }

    removeLine(lineNumber){
        this.linhas.splice(lineNumber, 1);
    }

    open(){
        console.log('Open');
    }

    save(){
        console.log('Save');
        console.log(this.linhas.join('\n'));
    }
}

class TextEditor extends Editor {
    insertLine(lineNumber, text) {
        super.insertLine(lineNumber, text);
    }

    removeLine(lineNumber) {
        super.removeLine(lineNumber);
    }
}

const textEditor = new TextEditor();

textEditor.open();

let textoEntrada;
let textoSaida = '';

while(true){
    textoEntrada = prompt.question('Digite um texto ou EOF para sair: ');
    if(textoEntrada.toUpperCase() == 'EOF'){
        textoSaida.trim().split('\n').forEach((lineNumber, text)=>{
            textEditor.insertLine(text, lineNumber);
        });
        textEditor.save();
        break;
    }else{
        textoSaida += `${textoEntrada}\n`;
    }
}