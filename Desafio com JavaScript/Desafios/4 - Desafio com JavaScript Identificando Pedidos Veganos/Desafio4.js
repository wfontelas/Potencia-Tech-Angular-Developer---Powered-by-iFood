// Entrada
const n = parseInt(gets()); // Número de pedidos

// Array para armazenar os pedidos
const pedidos = [];

// Loop para obter as informações de cada pedido
for (let i = 0; i < n; i++) {
  const nomePrato = gets(); // Nome do prato
  const calorias = parseInt(gets()); // Quantidade de calorias
  const ehVegano = gets() === 's'; // Se o prato é vegano (true) ou não (false)

  // Adiciona o pedido ao array de pedidos
  pedidos.push({
    nome: nomePrato,
    calorias: calorias,
    vegano: ehVegano
  });
}

// Imprimir a lista de pedidos com suas informações correspondentes
for (let i = 0; i < pedidos.length; i++) {
  const pedido = pedidos[i];
  const numeroPedido = i + 1;
  const tipoVegano = pedido.vegano ? 'Vegano' : 'Nao-vegano';
  console.log(`Pedido ${numeroPedido}: ${pedido.nome} (${tipoVegano}) - ${pedido.calorias} calorias`);
}


