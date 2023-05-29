/*Faça um program para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
1 - Preço do Combustível;
2 - Gasto médio de combustível do carro por KM;
3 - Distância em KM da viagem;

Imprima no sonsole o valor que será gasto para realizar esta viagem*/
//Minha Resolução
let precoCombustivel = 4.69
let kmPorLitro = 12
let distanciaKmViagem = 300
let valorGasto = (distanciaKmViagem / kmPorLitro) * precoCombustivel

console.log('Preço do combustivel: R$', precoCombustivel)
console.log('Gasto médio de combustivel do carro: ',  kmPorLitro)
console.log('distancia em KM da viagem: ', distanciaKmViagem)
console.log('--------------------------------------')
console.log('Valor gasto para realizar a viagem: R$', valorGasto.toFixed(2))

//Resolução da Aula

// const precoCombustivel = 5.79;
// const kmPorLitro  = 10;
// const distanciaKm = 100;

// const litrosConsumidos = distanciaKm / kmPorLitro;
// const valorGasto = litrosConsumidos * precoCombustivel;

// console.log(valorGasto.toFixed(2));

