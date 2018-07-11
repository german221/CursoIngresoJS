function Mostrar()
{
//tomo la edad  

	var age;
	var estadocivil;

	age=document.getElementById('edad').value;
	age=parseInt(age);
	estadocivil=document.getElementById('estadoCivil').value;


	if(age<18 && estadocivil!="Soltero")
	{
		alert("Es muy pequeño para NO ser soltero");
	}


}//FIN DE LA FUNCIÓN