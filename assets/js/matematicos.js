// Se crean 2 variables para almacenar numeros
let num1 = parseInt(prompt("Ingresar primer número mayor a cero"))
let num2 = parseInt(prompt("Ingresar segundo número mayor a cero"))

// Se crean 5 variables para almacenar los resultados de los diferentes calculos matematicos
let resultadosum = num1 + num2
let resultadores = num1 - num2
let resultadomult = num1 * num2
let resultadodiv = num1 / num2
let resultadomodu = num1 % num2

// Se muestra los resultados en la pagina
document.write(`La suma es: ${resultadosum}`+ `<br>`)
document.write(`La resta es: ${resultadores}`+ `<br>`)
document.write(`La multiplicación es: ${resultadomult}`+ `<br>`)
document.write(`La divición es: ${resultadodiv}`+ `<br>`)
document.write(`El modulo es: ${resultadomodu}`+ `<br>`)
