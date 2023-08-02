/* 1) Realizar un programa que permita el ingreso de un número y muestre su tabla de 
multiplicar (Los primeros 10 múltiplos).  */

/* let numero = Number(prompt("Ingresa un numero"));
let multiplicacion = 0;


for (let i = 0; i <=10; i++ ){
  multiplicacion = numero * i 
  console.log(`${numero} multiplicado por ${i} es: ${multiplicacion}`)
} */


/* 2) Realizar un programa que permita el ingreso de números los cuales se tienen que ir 
  acumulando. El ingreso de datos terminará cuando el usuario ingrese un valor 0. 
 */

  /* let numero = Number(prompt("Ingrese un numero"))
  let n_Acumulado = numero; 

  while (numero != 0 ) { 
    numero = Number(prompt("Ingrese un numero"))
    n_Acumulado+= numero
    console.log(numero)
  }
  console.log(n_Acumulado) */


  /* 3)Guarda el número final del ejercicio N°2 en una variable, el mismo deberá estar en un 
rango entre 1 - 100. La persona deberá poder ingresar números hasta adivinar el valor 
guardado en dicha variable. Si el valor ingresado es mayor al número secreto, avisarle 
al usuario, lo mismo si el valor es menor. Así sucesivamente hasta que el usuario 
adivine el número secreto. Por último mostrar un mensaje de felicitaciones y decirle en 
cuantos intentos lo ha realizado. */

/* let numero_final = n_Acumulado
let adivinar_numero = 0
let cantidad_adivinacion = 0;
while (adivinar_numero != numero_final) {
  adivinar_numero = Number(prompt("Adivina el numero!"))
  cantidad_adivinacion+=1

  if (adivinar_numero > numero_final){
    console.log("El valor ingresado es mayor que el nunero secreto!")
  } else if (adivinar_numero < numero_final) {
    console.log ("El valor ingresado es menor que el numero secreto!")
  } else {
    console.log(`Felicidades, adivinaste en ${cantidad_adivinacion} intentos`)
  }
}  */

/* 4) Realizar un programa que reciba un número y muestre de alguna forma todos sus 
divisores. */
/* 
let num = Number(prompt("Ingrese un numero"))
let division = 0;
let divisor = 1;

for (let i = 0; i <=10; i++){
    division = num/divisor
    console.log(`La division de ${num} entre ${divisor} es ${division}`)
    divisor +=1 
    
  }
 */

  /* 5) Dado un array de 10 elementos, realizar un programa que recorra ese array y muestre 
  un mensaje por consola con cada uno de los elementos del array. */

/* let juegos = ["fornite", "skyrim", "smite", "fifa", "resident evil", "mario bros", "mortal kombat", "call of duty", "league fo legends", "valorant"]

for (const juego of juegos) {
  console.log(juego)
} */

/* 6) Dado un array de 10 números, realizar un programa que muestre por consola el doble 
de cada uno de los elementos. */
  /* let listaNumeros = [2,6,10,33,52,13,44,56,1,23]
  for (numero of listaNumeros) {
    console.log(`El doble de ${numero} es ${numero*2}`)
  }
 */
/*7)Dado un array con al menos 5 objetos comprendidos por un grupo familiar, cada 
objeto representa a 1 persona con al menos 4 propiedades, realizar un programa que 
muestre un mensaje de presentación por cada elemento del array.  */

/* let familia = [
  {nombre:"Benjamin",
   Apellido:"Matteo",
   Profesion:"Programador",
   edad:26},

   {nombre:"Kattalina",
   Apellido:"Matteo",
   Profesion:"Enfermera",
   edad:28},

   {nombre:"Bastian",
   Apellido:"Matteo",
   Profesion:"No aplica",
   edad:35},

   {nombre:"Aldo",
   Apellido:"Matteo",
   Profesion:"Venta de seguros",
   edad:58},

   {nombre:"Ines",
   Apellido:"Mendez",
   Profesion:"Venta de seguros",
   edad:60},
]

for (const familiar of familia) {
  console.log (`Hola mi nombre es ${familiar.nombre} y tengo ${familiar.edad} años`)
} */

/* 8)  Dado un array de 10 números, realizar un programa que recorra el array y solo muestre 
los números impares. */

/* let listaNumeros = [2,6,10,33,52,13,44,56,1,23]

for (numero of listaNumeros) { 
  if (numero % 2 != 0) {
    console.log (numero)
  } 
} */

/* 9) Realizar un programa que permita la entrada de números y calcule la suma de los 
números pares por un lado y los impares por otro, el ingreso de dato finaliza cuando el 
usuario ingresa un 0. */
/* 
let ingresaNumero = Number(prompt("Ingresa un numero"))
let numeros_pares = []
let numeros_impares = []
let suma_pares = 0
let suma_impares =0

while (ingresaNumero != 0 ) {
  ingresaNumero = Number(prompt("Ingresa un numero"))
  if (ingresaNumero % 2 === 0 ) {
    numeros_pares.push(ingresaNumero)
  } else if (ingresaNumero % 2 !=0){
    numeros_impares.push(ingresaNumero) 
  }
}

for (pares of numeros_pares) {
  suma_pares += pares
  
}

for (impares of numeros_impares){
  suma_impares += impares
 
}
console.log(suma_pares)
console.log(suma_impares) */

 /* 10) Dado un array de 10 números, realizar un programa que imprima por pantalla el 
número más grande. */

let numeros = [1,5,6,7,23,25,62,72,75,12] 

for (const numero of numeros) {
  let numeroso = numero
  if (numero > numeroso) {
    console.log(numero)
  }
}