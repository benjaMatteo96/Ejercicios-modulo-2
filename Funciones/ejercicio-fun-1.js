/* 1 ) Crea una función llamada "saludar" que tome un parámetro de tipo cadena/string que 
represente un nombre, y muestre en la consola un saludo personalizado utilizando el 
nombre proporcionado. Llama a la función con tu propio nombre para verificar que 
funcione correctamente. */

function saludar (nombre){
  console.log(`Hola ${nombre}`)
}
saludar ("Benjamin")

/* 2) Crea una función llamada "multiplicar" que reciba dos parámetros numéricos y 
devuelva el resultado de la multiplicación de ambos. Llama a la función con dos valores 2 diferentes y muestra el resultado en la consola. */

function multiplicar (num1,num2) {
  console.log(num1 * num2 )
}
multiplicar(2,5)

/* 3) Crea una función llamada "areaTriangulo" que reciba dos parámetros numéricos que 
representen la base y la altura de un triángulo, y devuelva el área del mismo. Luego, 
crea otra función llamada "perimetroTriangulo" que reciba tres parámetros numéricos 
que representen los lados de un triángulo, y devuelva el perímetro del mismo. Utiliza 
estas funciones para calcular el área y el perímetro de un triángulo con base 5 y altura 
3 y lados de 4, 5 y 6 respectivamente.
 */

function areaTriangulo (num1,num2){
  let area_triangulo = (num1 * num2)/2;
  console.log(`El area del triangulo es ${area_triangulo}`)
}



function perimetroTriangulo (num1,num2,num3){
  let perimetro_triangulo = num1 + num2 + num3; 
  console.log(`El perimetro de triangulo es ${perimetro_triangulo}`)
}

areaTriangulo(5,3)
perimetroTriangulo(4,5,6)

/* 4) Crea una función llamada "calcularPrecio" que reciba dos parámetros numéricos que 
representen el precio y la cantidad de un producto, y devuelva el precio total de la 
compra. Si la cantidad de productos es mayor o igual a 10, aplica un descuento del 
10% al precio total. Si la cantidad de productos es mayor o igual a 20, aplica un 
descuento del 20% al precio total. Llama a la función con diferentes valores de precio y 
cantidad para verificar que funcione correctamente */

function calcularPrecio (precio,cproducto) {
  let precio_total = precio * cproducto;

  if (cproducto >= 10 && cproducto < 20) {
     precio_total *= 0.9;
    
  } else if (cproducto >= 20) {
    precio_total *= 0.8;
  }

  console.log(precio_total)
} 

calcularPrecio(100,20)

/* 5) Crea una función llamada "esMayorDeEdad" que reciba un parámetro numérico que 
represente la edad de una persona, y devuelva un mensaje que indique si la persona 
es mayor de edad o no. Si la edad es mayor o igual a 18, el mensaje debe decir "Eres 
mayor de edad". Si la edad es menor a 18, el mensaje debe decir "Eres menor de edad". 
Utiliza el operador ternario para implementar esta función. Llama a la función con 
diferentes valores de edad para verificar que funcione correctamente */

function esMayorDeEdad (edadPersona){
  if (edadPersona >= 18) {
    console.log("Eres mayor de edad");
  } else if (edadPersona < 18 ) {
    console.log("Eres menor de edad")
  }
}
esMayorDeEdad(19)

/* 6) Crea una función llamada "calcularImpuesto" que tome un parámetro numérico que 
represente el ingreso anual de una persona, y devuelva el impuesto que debe pagar. Si 
el ingreso es menor o igual a $10,000, el impuesto es del 10% del ingreso. Si el ingreso 
es mayor a $10,000 pero menor o igual a $20,000, el impuesto es del 15% del ingreso. 
Si el ingreso es mayor a $20,000, el impuesto es del 20% del ingreso. Utiliza 
condicionales anidados para implementar esta función. Llama a la función con 
diferentes valores de ingreso para verificar que funcione correctamente. */
function calcularImpuesto (ingresoAnual){
  let impuesto = 0;
  if (ingresoAnual <= 10000){
    impuesto= ingresoAnual * 0.1

  } else if (ingresoAnual > 10000 && ingresoAnual <= 20000) {
    impuesto = ingresoAnual * 0.15

  } else if (ingresoAnual > 20000) {
    impuesto = ingresoAnual * 0.2
  }
  console.log(`Por ganar ${ingresoAnual} debes pagar un impuesto de ${impuesto}`)
}
calcularImpuesto(15000)