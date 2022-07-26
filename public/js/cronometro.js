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

//-- seteando para que el cronómetro siga funcionando en segundo plano --//
document.addEventListener('visibilitychange', (e) => {
	if (e.target.visibilityState != "visible") {
		document.getElementById("inicio").disabled = true;
		function inicio () {
			control = setInterval(cronometro,10);
			document.getElementById("inicio").disabled = true;
			document.getElementById("parar").disabled = false;
			document.getElementById("continuar").disabled = true;
			document.getElementById("reinicio").disabled = false;
		}
		console.log("te fuiste, no?");
	};
})

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

	//-- Defino las variables en esta parte, porque no puedo ejecutarlas adentro de la función --/

	//-- cuando se pausa el cronometro y se tiene en cuenta la hora de descanso --//
	let milisegundosTotalConDescanso = 0;
	if (milisegundosC && milisegundosP != NaN) {
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

		let fechaDefinitivaCD = dayjs(fechaTotalConDescanso + " " + horas + ":" + minutos + ":" + segundos);
		let horaDefinitivaCD = fechaDefinitivaCD.format("HH:mm:ss");
		let agregarTiempoCD = displayTotal.innerHTML = `
		<label for="total">Total: </label> 
		<input type="time" id="total" name="total" value="${horaDefinitivaCD}" readonly> 
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

		let fechaDefinitivaSD = dayjs(fechaTotal + " " + horas + ":" + minutos + ":" + segundos);
		let horaDefinitivaSD = fechaDefinitivaSD.format("HH:mm:ss");
		let agregarTiempoTotal = displayTotal.innerHTML = `
		<label for="total">Total: </label> 
		<input type="time" id="total" name="total" value="${horaDefinitivaSD}" readonly> 
		` ;
	};	
});

let formularioTarea = document.forms.formulario;
formularioTarea.addEventListener('submit', (e) => {
	e.preventDefault();
	let formulario = document.forms.formulario;
	console.log(formulario);
	let servicio = formulario.type.value;
	let cliente = formulario.cliente.value;
	let tiempo = formulario.total.value;
	Swal.fire({
		title: "Completado",
		titleText: "La TAREA con el cliente  " + cliente +  " te demando el tiempo de:   " + tiempo + "  hs",
		icon: 'success',
		showConfirmButton: false,
		timer:10000
	});
	setTimeout(() => {
	formularioTarea.submit()
	},4000);
	
})

