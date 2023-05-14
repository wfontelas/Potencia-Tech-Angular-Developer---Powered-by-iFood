// Entrada
const n = parseInt(gets()); // Quantidade de pedidos

let total = 0; // Variável para armazenar o valor total dos pedidos

// Loop para obter as informações de cada pedido
for (let i = 0; i < n; i++) {
  const linha = gets(); // String com o nome do pedido e o valor separados por espaço
  const [nomePedido, valorPedido] = linha.split(' '); // Separar o nome do pedido e o valor

  total += parseFloat(valorPedido); // Somar o valor do pedido ao total
}

const cupom = gets(); // Cupom de desconto escolhido

// Calcular o valor com desconto
let valorDesconto = 0;
if (cupom === '10%') {
  valorDesconto = total * 0.1;
} else if (cupom === '20%') {
  valorDesconto = total * 0.2;
}

const valorTotal = total - valorDesconto; // Calcular o valor total com desconto

// Imprimir o valor total formatado com duas casas decimais
console.log(`Valor total: ${valorTotal.toFixed(2)}`);
