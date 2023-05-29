//interfaces (types x interfaces)

//type = tipar o objeto
type robot = {
     readonly id: number;
    name: string;
};

//interface = tipar uma variavel especifica e trabalhar com classe
//um contrato que precisa seguir fielmente
interface robot2 {
    readonly id: number | string;
    name: string;
    sayHello(): string;
}

const bot1: robot = {
    id: 1,
    name: "megaman",
};

const bot2: robot2 = {
    id: 1,
    name: "megaman",
    sayHello: function (): string {
        throw new Error("Function not implemented.");
    }
};
console.log(bot1);
console.log(bot2);

//Quando usar interfaces
//Se vc vai definir a forma como uma const ou varivel tem que receber seus cvalore , tipa com type
//Quando for implentar em classes , usa a interface(contratos)

class Pessoa implements robot2 {
    id: string | number;
    name: string;

    constructor(id: string | number, name: string ){
        this.id = id;
        this.name = name;
        
    }
    sayHello(): string {
        return `hello i'm  ${this.name}`;      
    }   
}
const p = new Pessoa(1, "gutsman")
console.log(p.sayHello())

//Como o Js lida com interfaces ou types

/* No Typescript tem a interface e types e no JavaScript não é sintatico*/


