function Mostrar()
{
//tomo la edad  

var age;
var estado;

age=document.getElementById('edad').value;
age=parseInt(age);
estado=document.getElementById('estadoCivil').value;

if(!(age<18 && estado!="Soltero"))
{
    alert("Es Soltero y no es menor");
}


	


}//FIN DE LA FUNCIÓN