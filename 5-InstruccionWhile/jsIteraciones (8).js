function Mostrar()
{

	var contador;
	var positivo;
	var negativo;
    var respuesta;
    var numero;
	
	contador=0;
	positivo=0;
	negativo=1;
	respuesta="si";

	while(respuesta != "n")
	{
		contador=contador+1;
		numero=prompt("Ingrese un numero");
		numero=parseInt(numero);

		if(numero<0)
		{
			negativo=negativo*numero;
			negativo=parseInt(negativo);
		}
		else if(numero>0)
		{
			positivo=positivo+numero;
			positivo=parseInt(positivo);
		}
		else
		{
			alert("Ingreso 0, numero invalido");
		}

		respuesta=prompt("Desea ingresar otro numero? <s/n>");
	}
	


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN