/* 
02 - O IMC - Indice de Massa Corporal é um critério da Organização Mundial de Saúde 
para dar uma indicação sobre a condição de peso de uma pessoa adulta.

Formula do IMC:
IMC =peso / (altura * altura)

Elabore um algoritimo que dado o peso e a altura de um adulto mostre sua condição 
de acordo com a tabela abaixo.

IMC em adultos  Condição:
- Abaixo de 18.5 abaixo do peso;
- Entre 18.5 e 25 Peso Normal;
- Entre 25 e 30 Acima do Peso;
- Entre 30 e 40 Obeso;
- Acima de 40 Obsidade Grave;
*/

////Minha resolução

// let peso = 103;
// let altura = 1.87;

// let imc = peso / (altura * altura);

// if (imc < 18.5) {
//     console.log(" Vc esta abaixo do peso!")
// }
// else if (imc >= 18.5 && imc <= 25) {
//     console.log("Vc esta com o Peso Normal ;)")
// }
// else if ( imc > 25 && imc < 30){
//     console.log("Vc esta acima do Peso!!")
// }
// else if ( imc >= 30 && imc < 40{
//     console.log("Vc esta Obeso!!")
// }
// else{
//     console.log("Obesidade Grave!! ")
// }

//Resolução da Aula

const peso = 100;
const altura = 1.87;
const imc = peso / Math.pow(altura, 2);

if (imc < 18.5) {
    console.log("Abaixo do peso!")
}
else if (imc >= 18.5 && imc < 25) {
    console.log("Vc esta com o Peso Normal ;)")
}
else if ( imc >= 25 && imc < 30){
    console.log("Vc esta acima do Peso!!")
}
else if ( imc >= 30 && imc <= 40){
    console.log("Vc esta acima do Peso!!")
}
else{
    console.log("Obesidade Grave!! ")
}



