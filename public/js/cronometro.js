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
const displayTotal = document.getElementById('displayTotal');
//-- capturar los botones --//
const play = document.getElementById('inicio');
const pausa = document.getElementById('parar');
const continuar = document.getElementById('continuar');
const fin = document.getElementById('reinicio');
const total = document.getElementById('total');

//-- capturar el input de fecha --//
const fecha = document.getElementById('fecha');

//-- setear para colocar la fecha adentro del formulario--//
const fechaActual = dayjs().format('YYYY-MM-DD');
const agregarFecha = fecha.innerHTML = ` 
<label for="date">fecha</label>
<input type="date" id="date" name="date" value="${dayjs().format('YYYY-MM-DD')}" readonly> 
` ;

//-- variables para calcular el tiempo--//
let tiempoI = 0;
let tiempoP = 0;
let tiempoC = 0;
let tiempoF = 0; 

//-- setear para colocar el tiempo adentro del formulario--//
const tiempoInicio = play.addEventListener('click', () => {
	tiempoI = dayjs().format('HH:mm:ss');
	displayInicio.innerHTML = ` 
	<label for="tiempoInicio">Inicio: </label>
	<input id="tiempoInicio" type="time" name="tiempoInicio" value="${dayjs().format('HH:mm:ss')}" readonly>
	` ;
	Swal.fire({
		titleText: "Hora de Inicio: " + dayjs().format('HH:mm:ss'),
		icon: 'success',
		showConfirmButton: false,
		timer:1500
	});
});  

const tiempoPausa = pausa.addEventListener('click', () => {
	tiempoP = dayjs().format('HH:mm:ss');
	displayPausa.innerHTML = ` 
	<label for="tiempoPausa">Pausa: </label>
	<input id="tiempoPausa" type="time" name="tiempoPausa" value="${dayjs().format('HH:mm:ss')}" readonly>
	` ;
	Swal.fire({
		titleText: "Hora de la pausa: " + dayjs().format('HH:mm:ss'),
		icon: 'success',
		showConfirmButton: false,
		timer:1500
	});
});  

const tiempoContinuar = continuar.addEventListener('click', () => {
	tiempoC = dayjs().format('HH:mm:ss');
	displayContinuar.innerHTML = ` 
	<label for="tiempoContinuar">Continuar: </label>
	<input id="tiempoContinuar" type="time" name="tiempoContinuar" value="${dayjs().format('HH:mm:ss')}" readonly>
	` ;
	Swal.fire({
		titleText: "Hora de retorno: " + dayjs().format('HH:mm:ss'),
		icon: 'success',
		showConfirmButton: false,
		timer:1500
	});
});  

const tiempoFin = fin.addEventListener('click', () => {
	tiempoF = dayjs().format('HH:mm:ss');
	displayFin.innerHTML = ` 
	<label for="tiempoFin">Terminar: </label>
	<input id="tiempoFin" type="time" name="tiempoFin" value="${dayjs().format('HH:mm:ss')}" readonly>
	` ;
	Swal.fire({
		titleText: "Hora de cierre: " + dayjs().format('HH:mm:ss'),
		icon: 'success',
		showConfirmButton: false,
		timer:1500
	});
});

//calculo del tiempo total-//
const tiempoTotal = fin.addEventListener('click', () => {
	//-- creo un objeto en base a la hora que capture del cronometro --//
	const milisegundosI = Date.parse(fechaActual + " " + tiempoI);
	const fechaI = dayjs(new Date(milisegundosI));
	
	const milisegundosF = Date.parse(fechaActual + " " + tiempoF);
	const fechaF = dayjs(new Date(milisegundosF));

	const milisegundosP = Date.parse(fechaActual + " " + tiempoP);
	const fechaP = dayjs(new Date(milisegundosP));

	const milisegundosC = Date.parse(fechaActual + " " + tiempoC);
	const fechaC = dayjs(new Date(milisegundosC));
	
	//-- comparo las fechas para sacar la diferencia de tiempo --//
	const milisegundosTotal = fechaF.diff(fechaI);
	const fechaTotal = dayjs(new Date(milisegundosTotal));

	//-- cuando se pausa el cronometro y se tiene en cuenta la hora de descanso --//
	let milisegundosTotalConDescanso = 0;
	if ((milisegundosP != milisegundosC) != 0) {
		const milisegundosDescanso = fechaC.diff(fechaP);
		const fechaDescanso = dayjs(new Date(milisegundosDescanso));
		milisegundosTotalConDescanso = fechaTotal.diff(fechaDescanso);
		if (milisegundosTotalConDescanso < 0) {
			milisegundosTotalConDescanso = milisegundosTotalConDescanso * -1;
		}
		const fechaTotalConDescanso = dayjs(new Date(milisegundosTotalConDescanso));

		//-- Sigo la misma logica que con el tiempo total pero adentro del IF para el caso del descanso --//
		//-- obtengo por separado las unidades para trabajar con la hora --//	
		let horas = fechaTotalConDescanso.hour();
		let minutos = fechaTotalConDescanso.minute();
		let segundos = fechaTotalConDescanso.second();
		//-- lógica para arreglar la hora --//	
		horas = horas + 3;
		if (horas >= 24) {
			let horaDeMas = horas - 24;
			horas = 0 + horaDeMas;
		}

		const fechaDefinitiva = dayjs(fechaTotalConDescanso + " " + horas + ":" + minutos + ":" + segundos);
		const horaDefinitiva = fechaDefinitiva.format("HH:mm:ss");

		const agregarTiempoTotal = displayTotal.innerHTML = `
		<label for="total">Total: </label> 
		<input type="time" id="total" name="total" value="${horaDefinitiva}" readonly> 
		` ;
	} else {
			//-- obtengo por separado las unidades para trabajar con la hora --//	
		let horas = fechaTotal.hour();
		let minutos = fechaTotal.minute();
		let segundos = fechaTotal.second();
		//-- lógica para arreglar la hora --//	
		horas = horas + 3;
		if (horas >= 24) {
			let horaDeMas = horas - 24;
			horas = 0 + horaDeMas;
		}

		const fechaDefinitiva = dayjs(fechaTotal + " " + horas + ":" + minutos + ":" + segundos);
		const horaDefinitiva = fechaDefinitiva.format("HH:mm:ss");
		
		const agregarTiempoTotal = displayTotal.innerHTML = `
		<label for="total">Total: </label> 
		<input type="time" id="total" name="total" value="${horaDefinitiva}" readonly> 
		` ;
	};
	
});

let formularioTarea = document.forms.formulario;
let servicio = formularioTarea.type;
let tarea = formularioTarea.name;
let cliente = formularioTarea.client;
let horaDefinitiva = formularioTarea.total;
console.log(formularioTarea);
formularioTarea.addEventListener('submit', (e) => {
	e.preventDefault();
	Swal.fire({
		titleText: "Completado",
		text:"Servicio :" + servicio +
		"Tarea: " + tarea +
		"cliente: " + cliente +
		"Duración: " + horaDefinitiva,
		icon: 'success',
		showConfirmButton: false,
		timer:2500
	});
	formularioTarea.submit();
})

