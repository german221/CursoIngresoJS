//enunciado por el profesor
/*
ingreso:
maria f 15
jose m 33
pepe m 81

mostrar:
	cantidad
		1) de mayores de edad=2
		2) menores de edad=1
		3) cantidad de mujeres =1
		4) cantidad de hombres= 2
	nombre
		5) del mayor de edad=pepe
		6) del menor de edad=maria
		7)del hombre de menor edad=jose

*/

function Mostrar()
{
	
	var nombre;
	var edad;
	var sexo;
	var respuesta;
	var cMayoresDeEdad;
	var cMenoresDeEdad;

	cHombre=0;
	respuesta="si";
	cMujeres=0;
	contador=0;
	cMayoresdeEdad=0;
	cMenoresDeEdad=0;


	while(respuesta!="n")
	{	
		nombre=prompt("ingrese su nombre");
		edad=prompt("ingrese la edad");
		edad=parseInt(edad);
		
		while(edad<0 || edad>100)
		{
			edad=prompt("error, ing la edad otra vez");
		}
		
		sexo=prompt("ingrese el sexo");
		
		while(sexo!="f" && sexo!="m")
		{
			sexo=prompt("error, ingrese de nuevo el sexo");
		}

		if(edad>18)
		{
			cMayoresDeEdad++;
		}
		else
		{
			cMenoresDeEdad++;
		}
		
		alert("cantidad de mayores de edad: "+cMayoresDeEdad);
		alert("cantidad de menores de edad: "+cMenoresDeEdad);

		

		respuesta=prompt("Desea ingresar mas datos? s/n");
	}
}
