function Mostrar()
{

	var contador;
	var mayor;
	var menor;
	var respuesta;
	var numero;
	//var bandera=0;

	contador=0;
	respuesta='si';
	mayor;
	menor;


	while(respuesta!='n')
	{	
		
		numero=prompt("Ingrese el numero");
		numero=parseInt(numero);

//crear un numero inicial comparativo
		
		if(contador==0)
		{
			menor=numero;
			mayor=numero;
		//	bandera=1;
			contador++;
		}		
		else
		{
			if(numero<menor)
			{
				menor=numero;
			}
			if(numero>mayor)
			{
				mayor=numero;
			}

		}

		

		respuesta=prompt("desea ingresar otro numero? <s/n>");
	}
	

document.getElementById("maximo").value=mayor;
document.getElementById("minimo").value=menor;

}//FIN DE LA FUNCIÓN