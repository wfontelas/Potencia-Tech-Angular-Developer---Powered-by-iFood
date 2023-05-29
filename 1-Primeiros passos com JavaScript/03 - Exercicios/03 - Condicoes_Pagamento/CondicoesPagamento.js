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


let precoProdutoNormal = 125.36;

////condições de pagamento:
let aVistaDebito = precoProdutoNormal - (precoProdutoNormal * 0.1);
let aVistaDinheiroPix = precoProdutoNormal - (precoProdutoNormal * 0.15);
let acimaDuasVezes =  precoProdutoNormal + (precoProdutoNormal * 0.1);

let condicaoPagamento = aVistaDebito;

if (condicaoPagamento === aVistaDebito) {
    console.log("O preço a vista no Débito é de R$ " + condicaoPagamento.toFixed(2));
}
else if(condicaoPagamento === aVistaDinheiroPix){
    console.log("O preço a vista no Dinheiro ou Pix é de R$ " + condicaoPagamento.toFixed(2));
}
else if(condicaoPagamento === acimaDuasVezes){
    console.log("O preço parcelado em mais de 2X é de R$ " + condicaoPagamento.toFixed(2));
}
else{
     console.log("O preço a vista ou parcelado em até 2 x é de R$ " + precoProdutoNormal.toFixed(2));
}

//Resolução da Aula

const precoEtiqueta = 100;
const formaDePagamento = 1;

if(formaDePagamento === 1){
    console.log(precoEtiqueta - (formaDePagamento * 0.1 ));//-10%
}
else if(formaDePagamento === 2){
    console.log(precoEtiqueta - (formaDePagamento * 0.15 ));//-15%
}
else if(formaDePagamento === 3){
    console.log(precoEtiqueta);//precoEtiqueta
} 
else{
    console.log(precoEtiqueta + (precoEtiqueta * 0.1)); //+10%
}

//https://github.com/digitalinnovationone/javascript-developer-m1






