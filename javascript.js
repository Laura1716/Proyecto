function cambiaFondo(x){
	var body=document.getElementById('body');
	body.style.backgroundColor=x.value;
}

function validar(){
	var Mensaje;
	
	Mensaje = document.getElementById('Mensaje').value;
		if (Mensaje == "") {
		alert("Este campo no puede quedar vacio");
	} else{
		alert("El mensaje es el siguiente: "+Mensaje);
	}
}