
// Foram criadas algumas váriaveis base.

let horas = 0;
let minutos = 0;
let segundos = 0;
let milisegundos = 0;

let cron;

// Criado a função de click nos botões do cronômetro chamando algumas functions javascript.

document.getElementById("startBtn").onclick = () => start();
document.getElementById("stopBtn").onclick = () => stop();
document.getElementById("resetBtn").onclick = () => reset();

// Configurando as functions que serão chamadas pelos botões.

function start(){

// É importante chamar a função stop antes de dar ínicio ao timer pois ela limpa o timer, para que não fiquem vários funcionando em background.
  stop();

// O setInterval serve para executar uma função ou instrução várias vezes em um determinado intervalo de tempo. A sua sintaxe é: setInterval(funcao, tempo); Isto significa que a função "funcao" será executada assim cada vez que se atingir o determinado tempo.
  cron = setInterval(() => { timer(); }, 10);
}

function stop(){

// Limpamos o setInterval.
  clearInterval(cron);
}

function reset(){

// Zeramos as váriaveis auxiliares e o html com innerText.
  horas = 0;
  minutos = 0;
  segundos = 0;
  milisegundos = 0;
  document.getElementById("horas").innerText = "00";
  document.getElementById("minutos").innerText = "00";
  document.getElementById("segundos").innerText = "00";
  document.getElementById("milisegundos").innerText = "00";
}

function timer(){

// Se o millisecond somado a 10 for igual a 1000, portanto já se passou um segundo e então zeramos o milissegundo e aumentamos um 1 segundo.
  if ((milisegundos += 10) == 1000){
    milisegundos = 0;
    segundos ++;
  }
// Se o second for igual a 60, portanto já se passou um minuto e então zeramos o segundo e aumentamos um 1 minuto.
  if (segundos == 60){
    segundos = 0;
    minutos ++;
  }

// Se o minute for igual a 60, portanto já se passou uma hora e então zeramos o minuto e aumentamos uma hora.
  if (minutos == 60){
    minutos = 0;
    horas ++;
  }

// Por fim imprimimos tudo com InnerText.
  document.getElementById("horas").innerText = returnData(horas);
  document.getElementById("minutos").innerText = returnData(minutos);
  document.getElementById("segundos").innerText = returnData(segundos);
  document.getElementById("milisegundos").innerText = returnData(milisegundos);

}

function returnData(input){

// A função de returnData é usada apenas para deixar o texto mais dinâmico na tela, fazendo a seguinte logica, se o digito for menor que 10 então concatena com um 0(zero) na frente.
  return input > 10 ? input :`0${input}`
}