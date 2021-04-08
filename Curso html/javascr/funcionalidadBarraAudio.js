var miaudio, reproducir, barra, progreso, maximo;
maximo=600;
function comenzar(argument) {
	miaudio = document.getElementById("miaudio");
	reproducir = document.getElementById("play");
	barra = document.getElementById("barra");
	progreso = document.getElementById("progreso");

	reproducir.addEventListener("click", clicando, false);
	barra.addEventListener("click", adelantando, false);
}

function clicando(argument) {
	if ((miaudio.paused==false) && (miaudio.ended==false)) {
		miaudio.pause();
		reproducir.innerHTML="play";
		
	}
	else{
		miaudio.play();
		reproducir.innerHTML="pause";
		bucle=setInterval(estado,100);
	}
}

function estado(argument) {
	if (miaudio.ended==false) {
		var total=parseInt(miaudio.currentTime*maximo/miaudio.duration);
		progreso.style.width=total+"px";//utilizamos el progreso de la hoja de estilos
	}
}

function adelantando(posicion) {
	// body...
	if ((miaudio.paused==false) && (miaudio.ended==false)) {
		var ratonX= posicion.pageX-barra.offsetLeft;

		var nuevoTiempo=ratonX*miaudio.duration/maximo;

		miaudio.currentTime=nuevoTiempo;

		progreso.style.width=ratonX*"px";


	}
}


window.addEventListener("load", comenzar, false);