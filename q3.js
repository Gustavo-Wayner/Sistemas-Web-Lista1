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


// Um cliente pode ser atendido antes de outro que euntrou na fila em sua frente caso tenha um tempo de espera menor que seu antecessor dado que setTimeout
//  não pausa o programa, mas apenas procede com o programa até o retorno de setTimeout;
