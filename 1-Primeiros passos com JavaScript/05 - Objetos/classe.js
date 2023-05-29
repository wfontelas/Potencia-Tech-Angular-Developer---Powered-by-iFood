////Classes

// class Pessoa {
//     nome;
//     idade;

//     descrever() {
//         console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos`);
//     }
// }

// const william = new Pessoa();
// william.nome = 'William Fontelas'; 
// william.idade = 40;

// const caroline = new Pessoa();
// caroline.nome = 'Caroline Fontelas';
// caroline.idade = 42;

// william.descrever();
// caroline.descrever();
/*------------------------------------//-----------------------------------*/

////Classe com Construtor

class Pessoa{
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}


function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    }
    else if(p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome} `);
    }
    else{
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    }
}

const william = new Pessoa('William', 40);
const caroline = new Pessoa ('Caroline', 42);

compararPessoas(william, caroline);









