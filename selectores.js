
function desaparecerRojo(divId) {
	var div = document.getElementById(divId);
	div.parentNode.removeChild(div);
}

function esconderAzules(divClase) {
	var divs = document.getElementsByClassName(divClase);
	for (var i = 0; i < divs.length; i++) {
		divs[i].style.display = "none";
	}
}

function borrarBody() {
	var body = document.getElementById("body");
	var hijo = body.firstChild;
	while (hijo != null) {
		body.removeChild(hijo);
		hijo = body.firstChild;
	} 
}