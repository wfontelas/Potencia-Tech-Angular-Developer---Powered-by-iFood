//Objeto é uma coleção dinânmica de chaves e valor
//{} para definir um objeto



// const william = {
//     nome: 'William Fontelas',
//     idade: 40
// }; 

// william.altura = 1.87;

// delete william.nome;

// console.log(william.nome);
// console.log(william.idade);
// console.log(william.altura);
// console.log(william);


// //objeto passando uma função conhecido como metodo
// //Uma função dentro de um objeto chamamos de metodo
// //a palavra reservada this assume o objeto 

// const pessoa = {
//     nome: 'Alice Fontelas',
//     idade: 7,

//     descrever: function () {
//         console.log(`Meu nome é ${this.nome} e a minha idade é ${this.idade} anos`); //acentos graves (`) para permitir a interpolação de variáveis
//     }
// };

// pessoa.nome = 'Caroline';
// pessoa.idade = 42;

// pessoa.descrever = function (){
//     console.log(`Meu nome é ${this.nome}`);
// }

// pessoa.descrever();

//acessando os valores com uma sintaxe mais dinamica

const pessoa = {
    nome: 'William',
    idade: 40,

    descrever: function (){
        console.log(`Meu Nome é ${this.nome} e a minha idade é ${this.idade} anos`)
    }
}

const atributo = 'idade';

console.log(pessoa[atributo]);






