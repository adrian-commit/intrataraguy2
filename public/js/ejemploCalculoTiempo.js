  const date = '2022-06-23'
  const tiempoInicio = '10:25:39'
  const tiempoPausa = '10:55:40'
  const tiempoContinuar = '11:25:42'
  const tiempoFin = '12:35:43'
  1655990739000


  //--- Seleccionado las horas,minutos,segundos de cada uno de los tiempos ---//
  const tiempoDeInicio = Date.parse(date + ' ' + tiempoInicio);
  let fechaInicio = new Date(tiempoDeInicio);
  let horaInicio = fechaInicio.getHours();
  let minutosInicio = fechaInicio.getMinutes();
  let segundosInicio = fechaInicio.getSeconds();
  const tiempoDePausa = Date.parse(date + ' ' + tiempoPausa);
  let fechaPausa = new Date(tiempoDePausa);
  let horaPausa = fechaPausa.getHours();
  let minutosPausa = fechaPausa.getMinutes();
  let segundosPausa = fechaPausa.getSeconds();
  const tiempoDeContinuo = Date.parse(date + ' ' + tiempoContinuar);
  let fechaContinuo = new Date(tiempoDeContinuo);
  let horaContinuo = fechaContinuo.getHours();
  let minutosContinuo = fechaContinuo.getMinutes();
  let segundosContinuo = fechaContinuo.getSeconds();
  const tiempoDeFin= Date.parse(date + ' ' + tiempoFin);
  let fechaFin = new Date(tiempoDeFin);
  let horaFin = fechaFin.getHours();
  let minutosFin = fechaFin.getMinutes();
  let segundosFin = fechaFin.getSeconds();

//--- Haciendo los calculos ---//


///--- Calculando la hora ---//
if (horaInicio != horaFin) {
if (horaPausa != horaContinuo) {
  let horaDescanso = horaContinuo - horaPausa;
  const horaTotal = horaFin - horaDescanso - horaInicio;
} else {
  const horaTotal = horaFin - horaInicio;
}
} else {
const horaTotal = 0;
}


///--- Calculando Los minutos ---//
if (minutosInicio != minutosFin) {
if (minutosPausa != minutosContinuo) {
  let minutosDescanso = minutosContinuo - minutosPausa;
  const minutosTotal = minutosFin - minutosDescanso - minutosInicio;
} else {
  const minutosTotal = minutosFin - minutosInicio;
}
} else {
const minutosTotal = 0;
}


///--- Calculando los segundos ---//
if (segundosInicio != segundosFin) {
if (segundosPausa != segundosContinuo) {
  let segundosDescanso = segundosContinuo - segundosPausa;
  const segundosTotal = segundosFin - segundosDescanso - segundosInicio;
} else {
  const segundosTotal = segundosFin - segundosInicio;
}
} else {
const segundosTotal = 0;
}  

let tiempoTotal = {horaTotal, minutosTotal, segundosTotal};
 console.log(tiempoTotal);




function calcularTiempo() {
    let tiempoEnSegundos = Date.parse(date + ' ' + tiempoInicio);
    let fecha = new Date(1655990739000);
    let horas = fecha.getHours();
    let minutos = fecha.getMinutes();
    let segundos = fecha.getSeconds();

}
