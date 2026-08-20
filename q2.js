function criarConta(_saldo)
{
  let saldo = _saldo;
  return {
    depositar: (val) =>
    {
      saldo += val;
    },
    sacar: (val) =>
    {
      if (val > saldo)
      {
        console.log("Calmae patrão!");
        return;
      }
      saldo -= val;
    },
    consultarSaldo: () => {
      console.log(saldo);
    }
  }
}

const conta1 = criarConta(1000);
conta1.consultarSaldo();
conta1.sacar(100);
conta1.consultarSaldo();
conta1.depositar(300);
conta1.consultarSaldo();
