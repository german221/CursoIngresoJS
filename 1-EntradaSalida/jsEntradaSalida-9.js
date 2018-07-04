/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{

	var sueldo1;
    var result1;

    sueldo1=document.getElementById('sueldo').value;
    sueldo1=parseInt(sueldo1);
    

    result1=sueldo1*0.10+sueldo1;

    document.getElementById("resultado").value=result1;

}
