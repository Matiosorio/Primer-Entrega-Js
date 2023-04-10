//Pre Entrega 1

//Se calcula el descuento por la compra de cantidad de camisetas de futbol

// Definir variables
const precioPorCamiseta = 24000;
let cantidadCamisetas = 0;
let modelo = "";
let descuento = 0;
let precioFinal = 0;

// Aplicar descuentos
function calcularPrecio() {
    //Se solicita info al cliente
    cantidadCamisetas = parseInt(prompt("Ingrese cantidad de camisetas que desea comprar:"));

    modelo = prompt("Ingrese modelo de camiseta (titular o suplente)");
    while (modelo !== 'titular' && modelo !== 'suplente') {
        modelo = prompt("Ingrese modelo de camiseta (titular o suplente)");
    }

    precioFinal = cantidadCamisetas * precioPorCamiseta;

    //Si se compran mas de 5 camisetas o mas pero menos de 10 el descuento es del 10%, si se compran 10 o mas pero menos de 15 el descuento es del 20% y si se compran 15 o mas el descuento es del 20%
    if (cantidadCamisetas >= 5 && cantidadCamisetas < 10) {
        descuento = precioPorCamiseta * cantidadCamisetas * 0.1;
    } else if (cantidadCamisetas >= 10 && cantidadCamisetas < 15) {
        descuento = precioPorCamiseta * cantidadCamisetas * 0.2;
    } else if (cantidadCamisetas >= 15) {
        descuento = precioPorCamiseta * cantidadCamisetas * 0.3;
    }

    // Calculamos el precio final con descuento
    precioFinal -= descuento;

    //Mostramos el resultado al usuario:
    alert(`El precio final con un ${descuento}% de descuento es: $${precioFinal}`);
}

//Llamamos a la función
calcularPrecio();

//console.log(`El precio final con un ${descuento}% de descuento es: $${precioFinal}`);
