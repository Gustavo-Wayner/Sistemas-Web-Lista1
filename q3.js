function atenderCliente(nome, tempo)
{
  console.log(`${nome} entrou na fila`);
  setTimeout(() => {
      console.log(`Atendendo ${nome}`)
    }, tempo)
}

atenderCliente("João", 3000);
atenderCliente("Maria", 1000);
atenderCliente("Pedro", 2000);
