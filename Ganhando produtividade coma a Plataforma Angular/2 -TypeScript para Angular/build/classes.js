"use strict";
//Classes
class Character {
    constructor(name, strenght, skill) {
        this.name = name;
        this.strenght = strenght;
        this.skill = skill;
    }
    attack() {
        console.log(`Attack with ${this.strenght} points`);
    }
}
//Data Modifiers -Modificadores de acesso
/*
   public - acessa dentro e fora da classe, por default é publico
   private - é acessada somente na classe e tem que passar oa
   propriedade pelo metodo construtor para
   protected - Só pode ser acessado dentro da classe e de sub classes
   que herdam essa classe
   readonly -somente leitura, nã consegue setar do lado de fora da
   classe

   Os datas modifiers acima , também são aplicados em metodos também
*/
/*o que influência nas classes  - o status da classe, se é privada , publica
protegida , somente leitura */
//Subclasses
//Character: superclass - classe pai
//Magician: subclass -classe filha
//super() é para invocar o construtor da classe pai (Character)
class Magician extends Character {
    constructor(name, strenght, skill, magicPoints) {
        super(name, strenght, skill);
        this.magicPoints = magicPoints;
    }
}
const p1 = new Character("William", 10, 98);
const p2 = new Magician("Mago", 09, 30, 100);
p1.skill = 12;
//Generics
