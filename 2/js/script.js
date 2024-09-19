window.alert ("Vamos começar o desespero!");

// o window.prompt() solicita uma entrada de dados do usuário, exibindo uma caixa de texto.

let nome = window.prompt("qual é o seu nome?");

// inserida uma variavel let (valor alterável)

console.log("Nome informado: " + nome);



// O window .setTimout() executa uma função aós um intervalo de tempo definido em (milissegundos)

window.setTimeout(function() {
    console.log("executando após 2 segundos");
}, 2000); //2000 milissegundos = 2 segundos

window.confirm("estão entendendo? ")

// O window.open() abre uma nova janela ou aba com o URL especificado.

//window.open("https://www.google.com.br/", "_blank");

//ele irá fechar janela atual
//window.close

window.setInterval(function() {
window.clearInterval(intervalID)
});
// Manipulação do scroll
window.scroll(x,y)
//volta para a pagina anterior no histórico
window.history.back();
// Pagina seguinte
window.history.forward();
// XY paginas a frente
window.history.go(2); // determinado duas a frente
// Redireciona para outro site
window.location.href = "https://www.wikipedia.org";
