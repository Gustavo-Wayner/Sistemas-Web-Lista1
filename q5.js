let coinToss = () => Math.floor(Math.random() * 2); // 0 ou 1

function verificarPagamento()
{
  return new Promise((resolve, reject) =>
  {
    setTimeout(() => {
      if (coinToss() == 1) {
        resolve("Pagamento aprovado.");
      }
      else {
        reject("Erro ao processar pedido.");
      }
    }, 1000);
  })
}

function separarProduto()
{
  return new Promise((resolve, reject) =>
  {
    setTimeout(() => {
      if (coinToss() == 1) {
        resolve("Produto separado.");
      }
      else {
        reject("Erro ao processar pedido.");
      }
    }, 1000);
  })
}

function enviarPedido()
{
  return new Promise((resolve, reject) =>
  {
    setTimeout(() => {
      if (coinToss() == 1) {
        resolve("Pedido enviado.");
      }
      else {
        reject("Erro ao processar pedido.");
      }
    }, 1000);
  })
}

async function processarPedido() {
    try {
        const pagamento = await verificarPagamento();
        console.log("Pagamento aprovado.");

        const produto = await separarProduto();
        console.log("Produto separado.");

        const pedido = await enviarPedido();
        console.log("Pedido enviado.");

        console.log("Pedido concluído com sucesso!");
    }
    catch (erro) {
        console.log("Erro ao processar pedido.");
    }
}

processarPedido();
