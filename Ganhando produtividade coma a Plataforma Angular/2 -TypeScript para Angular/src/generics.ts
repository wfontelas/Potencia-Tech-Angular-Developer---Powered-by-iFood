//Generics

function concatArray(...items: any[]):any[] {
    return new Array().concat(...items);
}

const numArray = concatArray([1, 5], [4]);
const stgArray = concatArray(["william", "Ryu"], ["Ken"]);
console.log(numArray);
console.log(stgArray);

numArray.push("Chung lee"); /*com o tipo any vc pode 
acrescentar qualquer tipo de varivel  */

console.log(numArray);//[ 1, 5, 4, 'Chung lee' ]

//Utilizando Generics na prática

function concatArray1<T>(...items: T[]):T[] {
    return new Array().concat(...items);
}

const numArray1 = concatArray1<number[]>([1, 5], [4]);
const stgArray1 = concatArray1<string[]>(["william", "Ryu"], ["Ken"]);
console.log(numArray1);
console.log(stgArray1);

numArray1.push([23]); /*Agora verificamos que acrescentar uma varivel do
tipo string na const NumArray ele não vai aceitar, pois tipamos na hora
de passar a varivel */

console.log(numArray);