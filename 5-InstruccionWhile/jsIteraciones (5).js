function Mostrar()
{

var sexo = prompt("ingrese f ó m .");

//PASAR EL CONTENIDO DE LA VARIABLE A MINISCULAS
	
	sexo=sexo.toLowerCase(sexo);

while(sexo!="f" && sexo!="m")
{
	sexo=prompt("Incorrecto, ingrese un sexo valido");

//SE REPITE COMO EL PARSEINT, 
//PASAR LA VARIABLE A MINUSCULA.	
	
	sexo=sexo.toLowerCase(sexo);
}


document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN