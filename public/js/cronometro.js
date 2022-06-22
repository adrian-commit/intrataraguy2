
var centesimas = 0;
var segundos = 0;
var minutos = 0;
var horas = 0;
function inicio () {
	control = setInterval(cronometro,10);
	document.getElementById("inicio").disabled = true;
	document.getElementById("parar").disabled = false;
	document.getElementById("continuar").disabled = true;
	document.getElementById("reinicio").disabled = false;
}
function parar () {
	clearInterval(control);
	document.getElementById("parar").disabled = true;
	document.getElementById("continuar").disabled = false;
}
function reinicio () {
	clearInterval(control);
	centesimas = 0;
	segundos = 0;
	minutos = 0;
	horas = 0;
	Centesimas.innerHTML = ":00";
	Segundos.innerHTML = ":00";
	Minutos.innerHTML = ":00";
	Horas.innerHTML = "00";
	document.getElementById("inicio").disabled = false;
	document.getElementById("parar").disabled = true;
	document.getElementById("continuar").disabled = true;
	document.getElementById("reinicio").disabled = true;
}
function cronometro () {
	if (centesimas < 99) {
		centesimas++;
		if (centesimas < 10) { centesimas = "0"+centesimas }
		Centesimas.innerHTML = ":"+centesimas;
	}
	if (centesimas == 99) {
		centesimas = -1;
	}
	if (centesimas == 0) {
		segundos ++;
		if (segundos < 10) { segundos = "0"+segundos }
		Segundos.innerHTML = ":"+segundos;
	}
	if (segundos == 59) {
		segundos = -1;
	}
	if ( (centesimas == 0)&&(segundos == 0) ) {
		minutos++;
		if (minutos < 10) { minutos = "0"+minutos }
		Minutos.innerHTML = ":"+minutos;
	}
	if (minutos == 59) {
		minutos = -1;
	}
	if ( (centesimas == 0)&&(segundos == 0)&&(minutos == 0) ) {
		horas ++;
		if (horas < 10) { horas = "0"+horas }
		Horas.innerHTML = horas;
	}
}

//-- capturar los lugares donde van los inputs --//
const displayInicio = document.getElementById('displayInicio');
const displayPausa = document.getElementById('displayPausa');
const displayContinuar = document.getElementById('displayContinuar');
const displayFin = document.getElementById('displayFin');
//-- capturar los botones --//
const play = document.getElementById('inicio');
const pausa = document.getElementById('parar');
const continuar = document.getElementById('continuar');
const fin = document.getElementById('reinicio');

//-- capturar el input de fecha --//
const fecha = document.getElementById('fecha');

//-- setear para colocar el tiempo adentro del formulario--//
const tiempoInicio = play.addEventListener('click', () => {
	displayInicio.innerHTML = ` 
	<label for="tiempoInicio">Inicio: </label>
	<input id="tiempoInicio" type="time" name="tiempoInicio" value="${dayjs().format('hh:mm:ss')}" readonly>
	` ;
});  

const tiempoPausa = pausa.addEventListener('click', () => {
	displayPausa.innerHTML = ` 
	<label for="tiempoPausa">Pausa: </label>
	<input id="tiempoPausa" type="time" name="tiempoPausa" value="${dayjs().format('hh:mm:ss')}" readonly>
	` ;
});  

const tiempoContinuar = continuar.addEventListener('click', () => {
	displayContinuar.innerHTML = ` 
	<label for="tiempoContinuar">Continuar: </label>
	<input id="tiempoContinuar" type="time" name="tiempoContinuar" value="${dayjs().format('hh:mm:ss')}" readonly>
	` ;
});  

const tiempoFin = fin.addEventListener('click', () => {
	displayFin.innerHTML = ` 
	<label for="tiempoFin">Terminar: </label>
	<input id="tiempoFin" type="time" name="tiempoFin" value="${dayjs().format('hh:mm:ss')}" readonly>
	` ;
});

//-- setear para colocar la fecha adentro del formulario--//
const agregarFecha = fecha.innerHTML = ` 
<label for="date">fecha</label>
<input type="date" id="date" name="date" value="${dayjs().format('YYYY-MM-DD')}" readonly> 
` 

