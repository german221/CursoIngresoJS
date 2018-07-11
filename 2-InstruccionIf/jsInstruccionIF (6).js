function Mostrar()
{
//tomo la edad  

var age;

age=document.getElementById('edad').value;
age=parseInt(age);
/* ASI ESTA MAL PERO FUNCIONA
if(age<13)
{
	alert("Usted es un niño.");
}

if(age>=13 && age<=17)
{
	alert("Usted es adolescente");
}

if(age>18)
{
	alert("Usted es Mayor de edad");
}
*/


// ASI LO EXPLICO EL PROFE APRENDE BRUTO!
if(age<13)
{
	alert("Usted es niño");
}
else
{
	if(age>=13 && age<=17)
	{
		alert("Usted es adolescente");
	}
	else
	{
		alert("Usted es adulto");
	}
}

}//FIN DE LA FUNCIÓN