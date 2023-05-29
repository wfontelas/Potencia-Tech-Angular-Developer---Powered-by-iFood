/*
    1- Crie uma classe para representar carros.
    Os Carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
    Crie um método que dado a quantidade de quilômetros e o preço do combustível nos dê o valor
    gasto em reais para realizar este percurso.
*/

class Carro{
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    calcularGastoDePercurso(distanciaEmKm, precoCombustivel){
        return distanciaEmKm * this.gastoMedioPorKm * precoCombustivel;
    }

}

const voyage = new Carro('VolksWagem', 'Preto', 1/10);
console.log(voyage.calcularGastoDePercurso(70, 5).toFixed(2));

const uno = new Carro('Fiat', 'Branco', 1/12);
console.log(voyage.calcularGastoDePercurso(70, 5).toFixed(2));

