/*
tarea

cree una variable que contenga un valor en metros, conviertalo en kilometros y registre el valor en kilometros en el siguiente formato:
"La distancia de 130 kilometros es igual a metros"
*/

let metros = prompt('Ingrese el valor en metros')
let kilometros = metros / 1000

if(!isNaN(Number(metros))){
    console.log(`${metros} metro(s) es igual a ${kilometros} kilometro(s)`)
}else{
    console.log(`Lo que ingresaste no es un numero en metros`)
}

/*
calculadora de IMC
establezca valores para la altura en cm y el peso en gramos, luego convierta los valores a centimetros y kilos, enviando los resultados a la consola
1 cm es igual a 0.01 metros
1 kilogramos es igual a 1000 gramos

salida de los resultados, luego calcula
*/

let alturaCM = prompt('Ingrese la altura en cm')
let pesoGR = prompt('Ingrese el peso en gramos')
let alturaM = alturaCM / 100
let pesoK = pesoGR / 1000

let imc = pesoK / (Math.pow(alturaM,2))

if(!isNaN(Number(alturaCM)) && !isNaN(Number(pesoGR))){
    console.log(`${alturaCM} cm es igual a ${alturaM} metros`)
    console.log(`${pesoGR} gramos es igual a ${pesoK} kilogramos`)
    console.log(`El indice de IMC es igual a ${imc}`)

}else if(!isNaN(Number(alturaCM)) && isNaN(Number(pesoGR))){
    console.log(`${alturaCM} cm es igual a ${alturaM} metros`)
    console.log(`Lo que ingresaste no es un numero en gramos`)

}else if(isNaN(Number(alturaCM)) && !isNaN(Number(pesoGR))){
    console.log(`${pesoGR} gramos es igual a ${pesoK} kilogramos`)
    console.log(`Lo que ingresaste no es un numero en cm`)

}else{
    console.log(`Lo que ingresaste no es un numero en cm ni en gramos`)
}


/*
evaluacion de un juego de numeros
pida al usuario que ingrese un numero y verifique si es mayor, igual o menor que un valor de numero dinamico en su codigo. envie el resultado al usuario
*/

let numeroDinamico = 40
let numeroUsuario = prompt('Ingrese un numero a comparar...')

if(!isNaN(Number(numeroUsuario)) && numeroUsuario > numeroDinamico){
    console.log('El numero ingresado es mayor al numero dinamico')
}else if(!isNaN(Number(numeroUsuario)) && numeroUsuario < numeroDinamico){
    console.log('El numero ingresado es menor al numero dinamico')
}else if(!isNaN(Number(numeroUsuario)) && numeroUsuario == numeroDinamico){
    console.log('Felicidades!!! El numero ingresado es igual al numero dinamico')
}else{
    console.log('Lo que ingresaste no es un numero a comparar...')
}

/*
juego de corrector amigo
pidale al usuario que ingrese un nombre, usando la declaracion de cambio para devolver una confirmacion de que el usuario es un amigo si el nombre seleccionado se conoce en las declaraciones de caso. puede agregar una respuesta predeterminada de que no conoce a la persona si es un nombre desconocido. envie el resultado a la consola
*/

let nombre = prompt('Ingrese un nombre cualquiera').toLowerCase()


switch (nombre) {
    case 'gabriel': console.log(`${nombre} es una persona conocida`);
    break;
    case 'flor': console.log(`${nombre} es una persona desconocida`);
    break;
    case 'sergio': console.log(`${nombre} es una persona conocida`);
    break;
    case 'romina': console.log(`${nombre} es una persona conocida`);
    break;
    case 'rocio': console.log(`${nombre} es una persona conocida`);
    break;
    case 'alan': console.log(`${nombre} es una persona conocida`);
    break;
    case 'federico': console.log(`${nombre} es una persona conocida`);
    break;
    case 'javier': console.log(`${nombre} es una persona desconocida`);
    break;
    case 'sol': console.log(`${nombre} es una persona desconocida`);
    break;
    default: console.log(`${nombre} es una persona desconocida`);
}