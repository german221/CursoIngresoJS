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

/*function Mostrar()
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
*/
function mostrar()
{

	var nota;
	var sexo;
	var i;
	var edad;
	var flag;
	var flag2;
	var flag3;
	var edadF;
	var notaF;
	var cVarones;
	var cMujeres;
	var sexoMenor;
	var acumNotas;
	var menorEdad;
	var sexoMenor2;
	var notaMenor2;
	var edadMenor;

	acumNotas=0;
	flag2=0;
	flag=0;
	flag3=0;
	cMujeres=0;
	cVarones=0;

	for(i=1;i<=5;i++)
	{
	//valido notas y el sexo
		
		nota=parseInt(prompt("Ingrese la nota: "));
		while(nota<0 || nota>10)
		{
			nota=prompt("ingrese una nota valida <0-10>");
		}
		sexo=prompt("Ingrese el sexo f/m");
		while(sexo!='f' && sexo!='m')
		{
			sexo=prompt("Error ingrese un sexo valido f/m");
		}
		

	//edades y comparaciones	

		edad=prompt("ingrese la edad:");

		if(flag==0)
		{
			menorEdad=edad
			notaMin=nota;
			sexoMenor=sexo;
			flag++;
		}

		

		if(nota<notaMin)
		{
			notaMin=nota;
			sexoMenor2=sexo;
		}

		if(edad<menorEdad)
		{
			menorEdad=edad;
			sexoMenor=sexo;
			notaMin=nota;
			
		}
//cantidad varones mayores de 18
		if(edad>18 && nota>=6 && sexo=='m')
		{
			cVarones++;
		}

		if(sexo=='f' && flag2==0)
		{
			edadF=edad;
			notaF=nota;
			flag2++;
			cMujeres++;
		}

		
		acumNotas=acumNotas+nota;


	}
	promedio=acumNotas/5;

	alert("el promedio de las notas fue: "+promedio);
	alert("la nota mas baja fue: "+notaMin+" y su sexo es: "+sexoMenor2);
	alert("cantidad de varones mayor a 18 con nota superior a 5: "+cVarones);
	alert("sexo del mas joven: "+ sexoMenor+ " y su nota es: "+notaMin);
	alert("primera mujer ingresada, Edad: "+edadF+" y su nota es: "+notaF);


	if(cMujeres==0)
	{
		alert("no hubo ninguna mujer ingresada al sistema!!");
	}

}

