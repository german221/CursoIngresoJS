/*
Testeo con los siguientes datos 
( d , -150(mal) , -50(bien)) 
( z , 0) 
( g , 20) 
( a , 150(mal) , 0(bien)) 
( b , 3) 
( k , 7)

a) La cantidad de números pares. 
b) La cantidad de números impares. 
c) La cantidad de ceros. 
d) El promedio de todos los números positivos ingresados. 
e) La suma de todos los números negativos.
f) El número y la letra del máximo y el mínimo.

*/


function mostrar()
{
    var letra;
    var numero;
    var cPares;
    var cImpares;
    var cCeros;
    var acumNumeros;
    var acumNegativos;
    var respuesta;
    var i;
    var cPositivos;
    var promedio;

    i=0;
    cPositivos=0;
    cCeros=0;
    cPares=0;
    cImpares=0;
    acumNumeros=0;
    acumNegativos=0;
    respuesta='s';

while(respuesta!='n')
  {
    letra=prompt("Ingrese una letra a-z");
    numero=parseInt(prompt("Ingrese un numero -100 hasta 100 : "));
    while(numero<-100 || numero >100)
    {
        numero=parseInt(prompt("Error ingrese un numero valido -100 hasta 100"));
    }

    if(numero/2==0)
    {
        cPares++;
    }
    else
    {
        cImpares++;
    }

    if(numero==0)
    {
        cCeros++;
    }

    if(numero>0)
    {
        acumNumeros=acumNumeros+numero;
        cPositivos++;
    }
    

    if(numero<0)
    {
        acumNegativos=acumNegativos+numero;
    }

    if(i==0)
    {
        max=numero;
        letraMax=letra;
        min=numero;
        letraMin=letra;
        i++;
    }
    if(numero<min)
    {
        min=numero;
        letraMin=letra;
    }
    if(numero>max)
    {
        max=numero;
        letraMax=letra;
    }
    respuesta=prompt("desea ingresar mas datos? ");
}

  promedio=acumNumeros/cPositivos;

  document.write("cantidad de pares: "+cPares+"<br>");
  document.write("cantidad de impares: "+cImpares+"<br>");
  document.write("cantidad de ceros: "+cCeros+"<br>");
  document.write("promedio numeros positivos: "+promedio+"<br>");
  document.write("suma negativos: "+acumNegativos+"<br>");
  document.write("letra del maximo: "+letraMax+" numero maximo: "+max+ "<br>");
  document.write("letra del maximo: "+letraMin+" numero maximo: "+min+ "<br>");
}


