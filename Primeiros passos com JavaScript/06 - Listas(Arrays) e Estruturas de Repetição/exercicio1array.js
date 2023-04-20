//1)Crie um programa que dado o numero imprima a sua tabuada.

// const numero = 7;
// for (let i = 0; i <= 10; i++){
//     console.log(`${numero} X ${i} = ${i * numero}`);
// }


//2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado

const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numeros.length; i++) {
    const numero = numeros[i];
    if (numero % 2 === 0){
        console.log(numero);
    }
        
}

//https://github.com/digitalinnovationone/javascript-developer-m1*

// const numerosPares = [];

// for (let i = 0; i < 10; i++) {
//     const numeroPar = i % 2 === 0;
//     if (numeroPar) {
//         numerosPares.push(i);
//     }
// }

// console.log(numerosPares);
 



