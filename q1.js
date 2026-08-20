function criarDesconto(pcnt)
{
  let p = pcnt;

  function aplicarDesconto(valor)
  {
    return valor * (pcnt*0.01);
  }

  return aplicarDesconto;
}


const pcnt10 = criarDesconto(10);
const pcnt15 = criarDesconto(15);
const pcnt11 = criarDesconto(11);

console.log(pcnt10(100));
console.log(pcnt15(1300));
console.log(pcnt11(1500));
