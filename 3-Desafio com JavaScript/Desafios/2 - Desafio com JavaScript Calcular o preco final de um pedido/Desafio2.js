//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

const valorHamburguer = parseFloat(gets());
const quantidadeHamburguer = parseInt(gets());
const valorBebida = parseFloat(gets());
const quantidadeBebida = parseInt(gets());
const valorPago = parseFloat(gets());

//TODO: Calcular o preço final do pedido (total dos hambúrgueres + total das bebidas).
const precoHamburguer = valorHamburguer * quantidadeHamburguer;
const precoBebida = valorBebida * quantidadeBebida;
const precoTotal = precoHamburguer + precoBebida;

//TODO: Calcular o troco do pedido, considerando o preço final e o valor pago pelo usuário.

const troco = valorPago - precoTotal;

//TODO: Imprimir a saída no formato especificado neste desafio.

const mensagem = `O preço final do pedido é R$ ${precoTotal.toFixed(2)}. Seu troco é R$ ${troco.toFixed(2)}.`;


print(mensagem);