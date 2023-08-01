/* 3) Realizar un programa que reciba 2 números y que imprima por consola cuál de los 2 
números es el más grande o si son iguales. */
let num_1 = 10;
let num_2 = 20; 
let num_3 = 10;

if (num_1 > num_2) {
  console.log(`${num_1} es mas grande que ${num_2}`)
}else if (num_2 > num_1){
  console.log(`${num_2} es mas grande que  ${num_1}`)
} else {
  console.log(`${num_1} y ${num_2} son iguales`)
}