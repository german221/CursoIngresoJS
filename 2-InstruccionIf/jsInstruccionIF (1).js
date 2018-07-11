function Mostrar()
{
//tomo la edad  

var age;

age=document.getElementById("edad").value;
age=parseInt(age);

if(age===15)
 {alert("niña bonita");
  }

//OTRAS CONDICIONES

if (age>15)
 {
 	alert("ha superado la edad maxima");
 } 

if(age<15)
{
	alert("no posee edad suficiente");
}

}//FIN DE LA FUNCIÓN