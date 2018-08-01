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

function mostrar()
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
	var mayorDeEdad;
	var menorDeEdad;

	cHombres=0;
	respuesta="si";
	cMujeres=0;
	contador=0;
	cMayoresdeEdad=0;
	cMayoresdeEdad=parseInt(cMayoresdeEdad);
	cMenoresDeEdad=0;
	cMenoresDeEdad=parseInt(cMenoresDeEdad);


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
	//contador mayores y menores	
		if(edad>18)
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
		{ if(sexo=="m")
			cHombres++;
		}
	//quien es mayor y quien es menor
		
		if(contador==0)
		{
			
			menorDeEdad=edad;
			mayorDeEdad=edad;
	
			contador++;
				
		}
		else
		{
			if(edad<menorDeEdad)
			{
				menorDeEdad=edad;
			}
			if(edad>mayorDeEdad)
			{
				mayorDeEdad=edad;
			}
		}


		

		respuesta=prompt("Desea ingresar mas datos? s/n");
	}
	
		alert("cantidad de mayores de edad: "+cMayoresDeEdad);
		alert("cantidad de menores de edad: "+cMenoresDeEdad);
		alert("cantidad de mujeres: "+cMujeres);
		alert("cantidad de hombres: "+cHombres);

}

