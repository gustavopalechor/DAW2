

function ejecuta(){

	/*for(var i=0; i<3; i++){
	document.getElementsByTagName("p")[i].onclick=saludo;
	}*/
	//document.getElementById('importante').onclick=saludo;
	/*for(var i=0; i<2; i++){
	var z=document.getElementsByClassName("importante")[i].onclick=saludo;
}*/
//document.querySelector(".importante").onclick=saludo;
//document.querySelector("#principal p:last-child").onclick=saludo;
	var elementos=document.querySelectorAll("#principal p, span");
	for(var i=0; i<elementos.length; i++){
	
	elementos[i].onclick=saludo;
	}

}
function saludo(argument) {
	alert("hola que hace");
}

window.onload=ejecuta;
