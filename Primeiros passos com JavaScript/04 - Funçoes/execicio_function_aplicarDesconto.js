/*
3- Elabore um algoritimo que calcule o que deve ser pago por um produto, considerando o preço normal
de etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo
adequado.

Código Condição de pagamento:
1 - À vista Debito, recebe 10% de desconto;
2 - À vista no Dinheiro ou PIX, recebe 15% de desconto;
3 - Em duas vezes, preço normal de etiqueta sem juros;
4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/


function aplicarDesconto(valor, desconto){
    return (valor - (valor * (desconto /100)));
}

function aplicarJuros(valor, juros) {
    return (valor + (valor * (juros /100)));
}


const precoEtiqueta = 100;
const formaDePagamento = 4;

if(formaDePagamento === 1){
    console.log(aplicarDesconto(precoEtiqueta, 10));//-10%
}
else if(formaDePagamento === 2){
    console.log(aplicarDesconto(precoEtiqueta, 15));//-15%
}
else if(formaDePagamento === 3){
    console.log(precoEtiqueta);//precoEtiqueta
} 
else{
    console.log(aplicarJuros(precoEtiqueta, 10)); //+10%
}

//https://github.com/digitalinnovationone/javascript-developer-m1

function calcularMedia(nota1, nota2) {
    const media = (nota1 + nota2) / 2;
    return media;
}

console.log(calcularMedia(5, 5));

