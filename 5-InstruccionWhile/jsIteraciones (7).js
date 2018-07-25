function Mostrar()
{
//falta terminarlo
	var contador=0;
	var acumulador=0;
	var respuesta="si";
	var num;
	var promedio;
	
	respuesta=prompt("Desea ingresar un numero?");

	while(respuesta=="si")
	{
		
		num=parseInt(prompt("Ingrese un numero"));

		acumulador=acumulador+num;
		acumulador=parseInt(acumulador);


		contador=contador+=1;


	}

promedio=acumulador/contador;

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN