/*Faça um program para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
1 - Preço do etanol;
2 - Preço da gasolina;
3 - O tipo de combustivel que está no seu carro;
4 - Gasto médio de combustivel do carro por KM;
5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar a viagem. */
 //Minha resolução
// const precoEtanol = 2.94;
// const precoGasolina = 4.69;
// let kmPorLitroCarroGasolina = 13;
// let kmPorLitroCarroEtanol = 10;
// let distanciaKmViagem = 300;
// let tipoCombustivel = 'Etanol'

// if(tipoCombustivel === 'Gasolina'){
//     console.log('Se for a Gasolina o valor é de : ' ,(distanciaKmViagem /kmPorLitroCarroGasolina) * precoGasolina);
// }
// else{
//     console.log('No Etanol o valor é de : ' ,(distanciaKmViagem /kmPorLitroCarroEtanol) * precoEtanol);
// }


//Resolução da Aula
const precoEtanol = 2.94;
const precoGasolina = 4.69;
const kmPorLitros = 10;
const distanciaKm = 100;
const tipoCombustivel = 'Gasolina';

const litrosConsumidos = distanciaKm / kmPorLitros;

if (tipoCombustivel === 'Etanol') {
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2));
}
else{
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log(valorGasto.toFixed(2));
}























