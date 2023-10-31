//funciones
function TablaMultiplicar(numero) {
//Bucle en este caso se inicializa con 1 luego prosigue con la condicion de bucle en este caso seguira hasta que sea menor o ihgual a 10 / no use el i++ por recomendacion del profesor 
    for (let i = 1; i <= 12; i = i + 1) {
//impresion en la consola del numero ingresado  x  el valor "i"      
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}
//variable / muestra en el prompt una ventana para ingresar el dato a multiplicar
let numero = parseInt(prompt("Ingrese un número "));


//condicion verifica si es un dato valido el ingresado en este caso un número
if (!isNaN(numero)) {
    TablaMultiplicar(numero);
} else {
// Si no ingresas un número válido, mostrará el siguiente mensaje
    console.log("Ingrese un número válido.");
}