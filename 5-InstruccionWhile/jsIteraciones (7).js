function Mostrar()
{
//falta terminarlo0
	/*var contador=0;
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
document.getElementById('promedio').value=acumulador/contador;*/

var contador;
var acumulador;
var respuesta;
var numero;
var promedio;

//inicializacion de variables

acumulador=0;
contador=0;
respuesta="si";

	while(respuesta != "n")
	{
		numero=prompt("Ingrese un numero");
		numero=parseInt(numero);
		acumulador=acumulador+numero;
		contador=contador+1;

		respuesta=prompt("Desea ingresar otro numero? <S/N>");
	}

	promedio=acumulador/contador;

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=promedio;

}//FIN DE LA FUNCIÓN