//Pre Entrega 1

//Se calcula el descuento por la compra de cantidad de camisetas de la selección

// Definir variables
const precioPorCamiseta = 24000;
let cantidadCamisetas = 0;
let modelo = "";
let descuento = 0;
let precioFinal = 0;


// Aplicar descuentos
function calcularPrecio() {
    alert(`¡Bienvenido a la tienda Online de Tinki Winki!`);
    
    alert(`Solo en esta tienda encontrará las camisetas originales de la Selección Argentina al mejor precio del mercado`);

    alert(`Dependiendo la cantidad que compres, podes obtener descuentos de 10, 20 o 30%`);

    alert('Comencemos!')

    //Se solicita info al cliente
    cantidadCamisetas = parseInt(prompt("Ingresa la cantidad de camisetas de la Selección que deseas comprar:"));

    modelo = prompt("Ingrese modelo de camiseta (titular o suplente)");
    while (modelo !== 'titular' && modelo !== 'suplente') {
        modelo = prompt("Por favor ingresa una opción valida (titular o suplente)");
    }

    precioFinal = cantidadCamisetas * precioPorCamiseta;

    //Si se compran mas de 5 camisetas o mas pero menos de 10 el descuento es del 10%, si se compran 10 o mas pero menos de 15 el descuento es del 20% y si se compran 15 o mas el descuento es del 30%
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
    alert(`El precio final con un ${descuento / (cantidadCamisetas * precioPorCamiseta) * 100}% de descuento es: $${precioFinal}`);
}

//Llamamos a la función
calcularPrecio();

