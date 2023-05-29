
const entradas = [ 78, 5, 50, 10, 98, 23, 15, 103, 25 , 49, 15 , 12 , 47];
let i = 0;

function gets() {
    const valor = entradas[i];
    i++;
    return valor;
}

function print(texto) {
    console.log(texto);
}

// module.gets = gets;
// module.print = print;

//ou simplesmente confrome abaixo
module.exports = { gets, print };   //exportar um objeto com a função gets e print.
  
















