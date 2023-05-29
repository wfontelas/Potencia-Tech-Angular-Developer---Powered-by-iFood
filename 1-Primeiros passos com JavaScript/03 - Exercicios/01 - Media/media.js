/* 1 - Faça um algoritimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule 
e imprima a sua média e a sua classificação conforme a tabela abaixo.

Média = (nota 1 + nota 2 + nota 3) / 3;

Classificação:
- Média menor que 5, reprovação;
- Média entre 5 e 7, recuperação;
- Média acima de 7, passou semestre;
*/

let nota01 = 6;
let nota02 = 7;
let nota03 = 7;

let media = (nota01 + nota02 + nota03) / 3;

if(media < 5 ){
    console.log("Sua Média = " ,media.toFixed(2), " e você foi reprovado" ); 
}
else if(media >= 5 && media <= 7 ){
    console.log("Sua Média = " ,media.toFixed(2), " e você esta de recuperação" ); 
}
else{
    console.log("Sua Média = " ,media.toFixed(2), " e você foi Aprovado ;)" );
}



