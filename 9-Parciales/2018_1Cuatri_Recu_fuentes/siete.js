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
	var cHombres;
	var cMujeres;
	var contador;
	var mayorEdad;
	var menorEdad;
	var nombreMayor;
	var nombreMenor;
	var hombreMenor;
	var hombreMenorEdad;

	cHombres=0;
	respuesta="si";
	cMujeres=0;
	contador=0;
	cMayoresDeEdad=0;
	cMenoresDeEdad=0;
	


	while(respuesta!="n")
	{	
		nombre=prompt("ingrese su nombre");
		edad=prompt("ingrese la edad");
		edad=parseInt(edad);
		
		while(edad<0 || edad>100)
		{
			edad=prompt("error, ing la edad otra vez (1-100)");
		}
		
		sexo=prompt("ingrese el sexo f/m");
		
		while(sexo!="f" && sexo!="m")
		{
			sexo=prompt("error, ingrese de nuevo el sexo f/m");
		}
	//contador mayores y menores	
		if(edad>=18)
		{
			cMayoresDeEdad+=1;
		}
		else
		{
			cMenoresDeEdad+=1;
		}
	//contadores de generos
		if(sexo=="f")
		{
			cMujeres++;
		}
		 else
		{	
			cHombres++;
		}
	//quien es mayor y quien es menor
		
		if(contador==0)
		{
			
			menorEdad=edad;
			nombreMenor=nombre;
			mayorEdad=edad;
			nombreMayor=nombre;
	
			contador++;
				
		}
		
		if(edad<menorEdad)
		{
				menorEdad=edad;
				nombreMenor=nombre;

		}
		if(edad>mayorEdad)
		{
				mayorEdad=edad;
				nombreMayor=nombre;
		}

//quien es el hombre menor de edad
		if(sexo=='m' && (cHombres==1 || edad<hombreMenorEdad ))
		{
			hombreMenor=nombre;
			hombreMenorEdad=edad;

		}

		


		

		respuesta=prompt("Desea ingresar mas datos? s/n");
	}
	
		document.write("cantidad de mayores de edad: "+cMayoresDeEdad+"<br>");
		document.write("cantidad de menores de edad: "+cMenoresDeEdad+"<br>");
		document.write("cantidad de mujeres: "+cMujeres+"<br>");
		document.write("cantidad de hombres: "+cHombres+"<br>");
		document.write("nombre del mayor de edad: "+nombreMayor+"<br>");
		document.write("nombre del menor de edad: "+nombreMenor+"<br>");
		document.write("el hombre mas chico es: "+hombreMenor+"<br>");
}

