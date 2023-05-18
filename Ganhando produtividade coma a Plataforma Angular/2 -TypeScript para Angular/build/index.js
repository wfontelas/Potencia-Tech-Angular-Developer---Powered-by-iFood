"use strict";
// type heroi = {
//     name: string;
//     vulgo: string;
// };
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// function printaObjeto(pessoa: heroi) {
//     console.log(pessoa);
// }
// printaObjeto({
//     name: "Bruce Wayne",
//     vulgo: "Batman",
// });
// //Decorators
// function ExibirNome( target: any){
//     console.log(target);
// }
// @ExibirNome
// class Funcionario {}
// @ExibirNome
// class Quincas{}
//class decorators
function apiVersion(version) {
    return (target) => {
        Object.assign(target.prototype, { __version: version });
    };
}
let Api = class Api {
};
Api = __decorate([
    apiVersion("1.10")
], Api);
