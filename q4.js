function consultarEstoque(produto) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let quant = Math.floor(Math.random() * 20);

      if (quant > 0) {
        resolve(`Produto: ${produto};\nQuantidade: ${quant};`);
      }
      else {
        reject(`Produto ${produto} está esgotado!`);
      }
    }, 2000);
  })
}


consultarEstoque("Teclado").then(resultado => {
    console.log(resultado);
}).catch(erro => {
    console.log(erro);
}).finally(() => {
    console.log("Consulta finalizada.");
});
