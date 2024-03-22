
let num1 = parseInt(prompt("Ingresar primer número"))
let num2 = parseInt(prompt("Ingresar segundo número"))
let num3 = parseInt(prompt("Ingresar tercer número"))
let num4 = parseInt(prompt("Ingresar cuarto número"))
let num5 = parseInt(prompt("Ingresar quinto número"))


const cantidad= 5

let suma = num1 + num2 + num3 + num4 + num5
let promedio = suma / cantidad


// Se muestra los resultados en la pagina
document.write(`La suma de todos los números: ${suma}`+ `<br>`)
document.write(`Promedio de los números: ${promedio}`+ `<br>`)