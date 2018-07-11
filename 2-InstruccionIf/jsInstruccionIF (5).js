function Mostrar()
{
//tomo la edad  

//operadores or ||, and &&

var age;

age=document.getElementById("edad").value;
age=parseInt(age);

if(!(age>12 && age<18))
{
	alert("Usted no es adolescente.");
}
}//FIN DE LA FUNCIÓN