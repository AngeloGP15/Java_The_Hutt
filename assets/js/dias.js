
// Se crea variable para almacenar los dias
let cantidad_dias = parseInt(prompt("Ingrese la cantidad de días:"))

// Se crean 3 variables para almacenar los resultados de los diferentes calculos
let anos = Math.floor(cantidad_dias / 365)
let semanas = Math.floor((cantidad_dias % 365) / 7)
let dias_restantes = cantidad_dias - (anos * 365) - (semanas * 7)


// Se muestra los resultados en la pagina
document.write(`Años: ${anos}`+ `<br>`)
document.write(`Semanas: ${semanas}`+ `<br>`)
document.write(`Dias: ${dias_restantes}`+ `<br>`)