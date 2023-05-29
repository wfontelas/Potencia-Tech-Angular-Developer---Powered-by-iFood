

// const funcoes = require('./funcoes-auxiliares');

// console.log(funcoes.gets());
// console.log(funcoes.print());
// console.log(funcoes);


//OBJECT DESTRUCTURING
// const { gets, print } = require('./funcoes-auxiliares');

// print(gets());

/*  Exercicio:

    uma sala contem 5 alunos e para cada aluno foi sorteado um número de 1 - 100.
    Faça um programa que recebe os 5 números sorteados para os alunos e mostre o maior número sorteado.

    Dados de entrada:
    5
    50 
    10
    98
    23

    Saída:
    98
*/

// const { gets, print } = require('./funcoes-auxiliares');

// const numeroSorteados = [];

// for (let i = 0; i < 5; i++) {
//     const numeroSorteado = gets();
//     numeroSorteados.push(numeroSorteado);
// }

// let maiorValor = 0;

// for (let i = 0; i < numeroSorteados.length; i++) {
//     const numeroSorteado = numeroSorteados[i];
//     if (numeroSorteado > maiorValor) {
//         maiorValor = numeroSorteado;
//     }
    
// }

// print(maiorValor);

///exercicio acima abstraido

const { gets, print } = require('./funcoes-auxiliares');

const quantidadeDeAlunos = gets();
let maiorValorEncontrado = 0;

for (let i = 0; i < quantidadeDeAlunos; i++) {
    const numeroSorteado = gets();
    if (numeroSorteado > maiorValorEncontrado) {
        maiorValorEncontrado = numeroSorteado;        
    }    
}

print(maiorValorEncontrado);

//https://github.com/digitalinnovationone/javascript-developer-m1*

