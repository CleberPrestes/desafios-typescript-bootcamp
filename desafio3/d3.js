
var botaoAtualizar = document.getElementById('atualizar-saldo');
var botaoLimpar = document.getElementById('limpar-saldo');
var soma = document.getElementById('soma');
var campoSaldo = document.getElementById('campo-saldo');
var result = 0;
campoSaldo.innerHTML = "";
function somarAoSaldo(soma) {
    result = soma + result;
    campoSaldo.innerHTML = result.toString();
}
function limparSaldo() {
    campoSaldo.innerHTML = '';
    result = 0;
    soma.value = '';
}
botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(Number(soma.value));
});
botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});
