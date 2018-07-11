function Mostrar()
{
//tomo la edad  

var age;

age=document.getElementById("edad").value;
age=parseInt(age);

if(age>=18)
{
	alert("Usted es mayor de edad");
}

// por novato hice esto

//if (age<18)
//{
//	alert("Usted es menor de edad");
//}

else
{
	alert("Usted es menor de edad");
}

//ACA TERMINA EL EJERCICIO SOLICITADO

// algo adicional por diversion

if(age>=80)
{
	alert("no crees que eres muy viejo para esto?");
}

}//FIN DE LA FUNCIÓN