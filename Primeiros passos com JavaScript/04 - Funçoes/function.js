//EXEMPLOS DE FUNCTION

////Funções

// function teste(){
//     console.log(teste);
// }

// teste();

// function sayMyName(name){
//     console.log("you name is " + name);
// }

// sayMyName('William');
// sayMyName('Roberto');
// sayMyName('Peres');
// sayMyName('Fontelas');


////Funções com procedimentos


// function quadrado(valor){
//     return valor * valor;
// }

// const quadradoDeDez = quadrado(10);
// console.log(quadradoDeDez);


// function incrementarJuros(valor, percentualJuros){
//     const valorDeAcrescimo = (percentualJuros / 100) * valor;
//     return valor + valorDeAcrescimo;
// }

// console.log(incrementarJuros(100, 10));
// console.log(incrementarJuros(150, 15));
// console.log(incrementarJuros(300, 12));



////Refatorando o programa IMC

function calcularImc(peso, altura){
    return peso / Math.pow(altura, 2);
}

function classificarImc(imc) {
    if (imc < 18.5) {
        return 'Abaixo do peso!';
    }
    else if (imc >= 18.5 && imc < 25) {
        return 'Vc esta com o Peso Normal ;)';
    }
    else if ( imc >= 25 && imc < 30){
        return 'Vc esta acima do Peso!!';
    }
    else if ( imc >= 30 && imc <= 40){
        return 'Vc esta acima do Peso!!';
    }
    else{
        return 'Obesidade Grave!! ';
    }    
}


// function main(){
//     const peso = 100;
//     const altura = 1.87;

//     const imc = calcularImc(peso, altura);
//     console.log(classificarImc(imc));
// }

// main = function(){ //as funções no javascript funcionam como objeto, podendo ser manipuladas
//     console.log(1)
// }

// main(); //Para chamar a função


//OU

(function (){
    const peso = 102;
    const altura = 1.75;

    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
})();  //Função chamada imediatamente








