const teste = document.querySelector("#abertura");
const botao = document.querySelector("#botaoProximo");
let count = 0;
let valor = setInterval(function(){
    count++;

    if(count === 7){
        botao.classList.remove('invisible');
        botao.classList.add('visible');
    }

    if(count === 10){
        teste.remove();
        clearInterval(valor);
    }
}, 1000);
