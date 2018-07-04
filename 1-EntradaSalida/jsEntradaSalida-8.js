/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var Dividendo;
	var Divisor;
	var resto;

	Dividendo=document.getElementById("numeroDividendo").value;
	Dividendo=parseInt(Dividendo);
	Divisor=document.getElementById("numeroDivisor").value;
	Divisor=parseInt(Divisor);

	resto=Dividendo%Divisor;

	alert("El resto es "+resto);

}
