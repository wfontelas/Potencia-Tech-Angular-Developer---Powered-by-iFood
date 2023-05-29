"use strict";
/*TRABALHANDO COM TIPOS DE VARIÁVEIS
        
Tipos de Variaveis :

//tipos primitivos: boolean, number, string

let ligado:boolean = false;  OU let ligado = false;
let nome:string = "William"; OU let nome = "William";
let idade:number = 40; OU let idade = 40;
let altura:number = 1.87; OU let altura = 1.87;

//tipos especiais : null, undefined

let nulo:null = null; OU let nulo = null;
let indefinido: undefined; Ou let indefinido = undefined;

//tipos abrangentes: any, void

let retorno:void

Ex:
    function executaQuery(): void{
    
    }

let retornoView:any = aceita qualquer coisa

Utilizamos quando temos uma função que pode trazer um valor imprevisível

-TRABALHANDO COM OBJECTS

//objeto
let produto:object ={  /*porém não é uma boa prática passar o objeto com previsibilidade
    name:"William",
    cidade:"Franca",
    idade: 40,
};

//objeto - sem previsibilidade (shapeado, ou tipado)

type ProdutoLoja = {
    nome:string;
    preco:number;
    unidades:number;
};

let meuProduto: ProdutoLoja = {
    nome: "Tênis",
    preco:89.99,
    unidades: 5,
};

-TRABALHANDO COM ARRAYS

let dados: string[] = ["William", "Caroline", "Alice"];
                
                ou
                
let dados2: Array<string> = ["William", "Caroline", "Alice"];

-TRABALHANDO COM ARRAYS DE MULTYPES

let infos: (string | number)[] = ["William", 40,"Caroline", 42, "Alice", 7]; //em qualquer ordem

-TRABALHANDO COM TUPLAS

let boleto:[string, number, number] =["conta de agua", 89.9, 321456798] //tem que seguir a ordem definida


-REAPROVEITANDO CONHECIMENTOS EM JAVASCRIPT

Metodos de arrays

Todos os metodos que vc aprendeu no JavaScript serve para o TypeScript

Ex:

    let dados: string[] = ["William", "Caroline", "Alice"];
    
    dados.pop();....

-TRABALHANDO COM DATES

let aniversario:Date = Date("2023-05-17 10:05");
console.log(aniversario.toString());

npm run start*/ 
