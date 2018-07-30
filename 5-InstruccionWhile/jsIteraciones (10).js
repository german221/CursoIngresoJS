function Mostrar()
{

	var contador;
	//declarar contadores y variables 
	var numero;
	var respuesta;
	var positivos;
	var negativos;
	var cantnegativos;
	var cantpositivos;
	var acumuladorCero

	respuesta="si";
	contador=0;
	positivos=0;
	negativos=0;

	while(respuesta!="n")
	{	
		contador++;
		numero=prompt("ingrese un numero");
		numero=parseInt(numero);

			if(numero>0)
			{
				positivos=positivos+numero;
				positivos=parseInt(positivos);
			}
			if(numero<0)
			{
				negativos=negativos+numero;
				negativos=parseInt(negativos);
			}
			if(numero==0)
			{
				acumuladorCero=contador;
			}	







	respuesta=prompt("Desea seguir ingresando numeros? <s/n>");
	}




}//FIN DE LA FUNCIÓN