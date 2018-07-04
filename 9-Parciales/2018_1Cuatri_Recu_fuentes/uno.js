
function Mostrar()
{
var altura;
var base;
var superficie;
var perimetro;

altura=prompt("ingrese la altura");
altura=parseInt(altura);
base=prompt("ingrese la base");
base=parseInt(base);

superficie=(altura*base)/2;

perimetro= (base*3);
alert("la superficie es: "+superficie+" y el perimetro es "+perimetro);
}
