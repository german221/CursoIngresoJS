function Mostrar()
{
var precio;
var porcent;
var precioDes;
var descuento;
var iva;
var precioIva
var precioIvad;

precio=prompt("Ingrese el precio");
precio=parseInt(precio);
porcent=prompt("Ingrese el porcentaje de descuento");
porcent=parseInt(porcent);
iva=prompt("Ingrese el IVA");

descuento=precio*(porcent/100);

precioDes=precio*(porcent/100)+precio;

precioIva=(precio*iva%)-precio;
precioIvad=(descuento*iva%)-descuento;

alert("El descuento en dinero es "+descuento);
alert("El precio con el descuento es "+precioDes);
alert("El Iva del descuento es "+precioIvad+" El iva del precio total es "+precioIva);



}
