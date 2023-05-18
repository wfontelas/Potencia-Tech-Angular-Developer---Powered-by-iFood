//funções
function addNumber(x : number, y: number ): number {
    return x + y;
}

let soma: number = addNumber(4, 7);

console.log(soma);

function addToHello(name: string) {
    return `Hello ${name}`;
}
console.log(addToHello("Willam"));

//Funçoes Multi Tipos
function CallToPhone(phone:number | string) : number | string {
    return phone;
}

console.log(CallToPhone(16999885925));

//Funçoes Async
async function getDatabase(id: number): Promise<number | string> {
    return "William";
}


