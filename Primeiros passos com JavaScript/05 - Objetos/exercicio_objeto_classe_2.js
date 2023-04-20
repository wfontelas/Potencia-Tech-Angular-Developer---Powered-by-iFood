/*
2-Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC(IMC = peso / (altura * altura)).
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e paça ao José para dizer 
o valor do seu IMC;
*/

class Pessoa{
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc(){
       return this.peso /(this.altura * this.altura);       
    }

    classficarImc(){
        const imc = this.calcularImc();

        if (imc < 18.5) {
            return 'Abaixo do peso!'
        }
        else if (imc >= 18.5 && imc < 25) {
            return 'com o Peso Normal ;)'
        }
        else if ( imc >= 25 && imc < 30){
             return 'acima do Peso!!'
        }
        else if ( imc >= 30 && imc <= 40){
             return ' acima do Peso!!'
        }
        else{
            return ' com Obesidade Grave!!'
        }
    }
}

const jose = new Pessoa('José', 70, 1.75);
const imc = jose.calcularImc();
const classficarImc = jose.classficarImc();
console.log(`O IMC de ${jose.nome} é de ${imc} e ele(a) esta ${classficarImc}`);

//https://github.com/digitalinnovationone/javascript-developer-m1*





