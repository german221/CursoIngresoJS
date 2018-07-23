/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var cant;
 	var marca1;
 	var precio;
 	var precioBruto;
 	var descuento;

 	precio=35;
 	cant=document.getElementById("Cantidad").value;
 	cant=parseInt(cant);
 	marca1=document.getElementById("Marca").value;
 	
 	precioBruto=cant*precio;
 	descuento=1*precio;
 	descuento=parseInt(descuento);

 	switch(cant)
 	{
 		case 1:
 		case 2:
 			break;
 		case 3:
 			switch(marca1)
 			{
 				case "ArgentinaLuz":
 					descuento=precioBruto*0.85;
 					break;

 				case "FelipeLamparas":
 					descuento=precioBruto*0.90;
 					break;
 					
 			}
 		case 4:
 			switch(marca1)
 			{
 				case "ArgentinaLuz":
 				case "FelipeLamparas"
 					descuento=precioBruto*0.75;
 				break;
 				
 			}
 		document.getElementById("precioDescuento").value=descuento;	
 	}




}
