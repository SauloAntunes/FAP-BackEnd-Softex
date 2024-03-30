class Pato{
    grasnar(){
        console.log('Pato Grasnando!');
    }

    voarPato(){
        console.log('Pato Voando!');
    }
}


class Galinha{
    cacarejar(){
        console.log('Galinha Cacarejando!');
    }

    voarGalinha(){
        console.log('Galinha Voando!');
    }
}


class AdaptadorPato extends Pato{
    constructor(pato){
        super();
        this.pato = pato;
    }

    cacarejar(){
        this.pato.grasnar();
    }

    voarGalinha(){
        this.pato.voarPato();
    }
}


class AdaptadorPatoDemo{
    adaptadorPatoDemo(){
        let pato = new Pato;
        pato = new AdaptadorPato(pato);
        pato.cacarejar();
        pato.voarGalinha();
    }
}


let adaptador = new AdaptadorPatoDemo;
adaptador.adaptadorPatoDemo();