
//https://github.com/lira1705/mentoria-typescript


// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?

let botaoAtualizar = document.getElementById('atualizar-saldo') as HTMLButtonElement; 
let botaoLimpar = document.getElementById('limpar-saldo') as HTMLButtonElement;
let soma= document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo') as HTMLElement;
let result: number = 0;
campoSaldo.innerHTML = ""

function somarAoSaldo(soma: number) {

   
    result=soma + result;
    campoSaldo.innerHTML = result.toString();
    
   
   
}

function limparSaldo() {

    campoSaldo.innerHTML = '';
    result=0;
    soma.value = '';
    
}

botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(Number(soma.value));
});

botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});