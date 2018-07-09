document.addEventListener("deviceready", onDeviceReady, false)
function onDeviceReady(){
	$('sig1').click(function(){
		navigator.notification.beep(1);
		var nombre_usuario = document.getElementsbyName('nombre')[1].value;
		localStorage.setItem("nombre", nombre_usuario);
		navigator.notification.alert("hola"+nombre_usuario,null,"bienvenido","ok");
	});
}
