// Se crean 1 variables para almacenar la temperatura
let num1 = parseInt(prompt("Ingresar temperatura en ° Celsius"))

// Se crean 2 variables  constantes con sus respectivos valores
const kelvin = 273.15
const fahrenheit = 32

// Se crean 2 variables para almacenar los resultados
let resultadokel = num1 + kelvin
let resultadofah = (num1 * 1.8) + fahrenheit

// Se muestra los resultados en la pagina
document.write(`La temperatura en Kelvin es: ${resultadokel}`+ `<br>`)
document.write(`La temperatura en Fahrenheit es: ${resultadofah}`+ `<br>`)
