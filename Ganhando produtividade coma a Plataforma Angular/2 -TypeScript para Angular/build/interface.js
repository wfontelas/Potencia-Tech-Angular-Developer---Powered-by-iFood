"use strict";
//interfaces (types x interfaces)
const bot1 = {
    id: 1,
    name: "megaman",
};
const bot2 = {
    id: 1,
    name: "megaman",
    sayHello: function () {
        throw new Error("Function not implemented.");
    }
};
console.log(bot1);
console.log(bot2);
//Quando usar interfaces
//Se vc vai definir a forma como uma const ou varivel tem que receber seus cvalore , tipa com type
//Quando for implentar em classes , usa a interface(contratos)
class Pessoa {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayHello() {
        return `hello i'm  ${this.name}`;
    }
}
const p = new Pessoa(1, "gutsman");
console.log(p.sayHello());
