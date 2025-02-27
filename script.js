// Cinstantes para cód.
const dia = document.getElementById("dia");
const hora = document.getElementById("hora");
const minuto = document.getElementById("minuto");
const segundo = document.getElementById("segundo");

// Código para hora de lançamento
const lancamento = "25 Marc 2025";
function countDown() {
  const datalanc = new Date(lancamento);
  const hoje = new Date();

  // Condição de calculos, convertendo Dias, Horas, Minutos e Segundos.
  const segTotal = (datalanc - hoje) / 1000;

  const finalDias = Math.floor(segTotal / 60 / 60 / 24);
  const finalHoras = Math.floor(segTotal / 60 / 60) % 24;
  const finalMinutos = Math.floor(segTotal / 60) % 60;
  const finalSegundos = Math.floor(segTotal) % 60;

  // Converter o formato de tempo conforme a função formatoTempo
  dia.innerHTML = finalDias;
  hora.innerHTML = formatoTempo(finalHoras);
  minuto.innerHTML = formatoTempo(finalMinutos);
  segundo.innerHTML = formatoTempo(finalSegundos);
}

// Função formatoTempo, adiciona um 0 na frente do valor, quando menor que o valor 10.
function formatoTempo(tempo) {
  return tempo < 10 ? `0${tempo}` : tempo;
}

countDown();
setInterval(countDown, 1000);
