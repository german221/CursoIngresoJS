function Mostrar()
{
//tomo la edad  

// == igual, != distinto, >= mayor o igual, 
// <= menor o igual
// > mayor, < menor.
// === igual en tipo de variable.

var age;

age=document.getElementById("edad").value;
age=parseInt(age);

if(age>=18)
{
	alert("Usted es mayor de edad");
}

}//FIN DE LA FUNCIÓN