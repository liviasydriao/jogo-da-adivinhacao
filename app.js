let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

console.log(numeroSecreto);

function exibirTextoNaTela(tag,texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function textoApresentacao() {
    exibirTextoNaTela('h1','Jogo do número secreto');
    exibirTextoNaTela('p','chute um número entre 1 e 10');
}

textoApresentacao();

function verificarChute(){ // essa função foi chamada no HTML
    let chute = document.querySelector('input').value;

    if(chute == numeroSecreto){
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let frase = `seu chute foi certeiro em ${tentativas} ${palavraTentativas}!`;
        exibirTextoNaTela('h1','Acertou!');
        exibirTextoNaTela('p',frase);

        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(chute > numeroSecreto){
            exibirTextoNaTela('p','o numero secreto é menor');
        } else {
            exibirTextoNaTela('p','o numero secreto é maior!');
        }
        tentativas++;
        limpaTela();
    }

}

function gerarNumeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
   let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = []
    };
   if(listaDeNumerosSorteados.includes(numeroEscolhido)){
    return gerarNumeroAleatorio();
   } else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados);
    return numeroEscolhido;
   }
}

function limpaTela() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limpaTela();
    tentativas = 1;
    textoApresentacao();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}