function Mostrar()
{
//tomo la edad  

var age;

age=document.getElementById("edad").value;
age=parseInt(age);
/*ASI LO HICE YO QUE VIRGEN JAJA

if(age>=13 && age<=17)
{
	alert("Usted es adolescente");
}*/

if(!(age<12 || age>17) )
{
	alert("Usted es adolescente");
}

//ALGO ADICIONAL POR DIVERSION.

/*if(age>=1 && age<13)
{
   alert("Usted es un nene! jajaja");
}
*/


}//FIN DE LA FUNCIÓN