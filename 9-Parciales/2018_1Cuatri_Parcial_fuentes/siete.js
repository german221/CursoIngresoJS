function mostrar()
{
 var nota;
 var sexo;
 var contador;
 var acuNotas;
 var promedio;
 var min;
 var max;
 var i;
 var sexoNotabaja;
 var cNotas;

 contador=1;
 acuNotas=0;
 i=0;
 cNotas=0;

 while (contador<=5)
 {  
    nota=parseInt(prompt("ingrese la nota del alumno: "));
    while(nota<0 || nota >10)
    {
        nota=prompt("nota invalida, ingrese nota entre 0-10 ");
    }

    acuNotas=acuNotas+nota;
    
    sexo=prompt("ingrese el sexo f/m");
    while(sexo!="f" && sexo !="m")
    {
        sexo=prompt("sexo invalido, ingrese f/m ");
    }

    promedio = acuNotas / 5;

    if(i==0)
    {
        min=nota;
        sexoNotabaja=sexo;
        max=nota;
        
        i++;
    }
    if(nota<min)
    {
        min=nota;
        sexoNotabaja=sexo;
    }
    if(nota>max)
    {
        max=nota;
    }
    if(sexo=="m" && nota>=6)
    {
        cNotas++;
    }
        
    contador++;

 }

 alert("el promedio de las 5 notas es: "+promedio);
 alert("la nota mas baja es: "+min+"y su sexo es: "+sexoNotabaja);
 alert("cantidad de varones con nota mayor o igual a 6: "+cNotas);

}
