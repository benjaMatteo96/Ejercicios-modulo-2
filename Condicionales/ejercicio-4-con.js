/* 4) Realizar un programa que reciba 3 números y que imprima por pantalla cual de los 3 es 
 el más chico */
 let num_1 = 10;
 let num_2 = 20; 
 let num_3 = 10;

 if (num_1 < num_2 ){
  if (num_1 < num_3){
    console.log(`${num_1} es menor que ${num_2} y ${num_3}`)
  }
 }if (num_2 < num_1 ){
  if (num_2 < num_3){
    console.log(`${num_2} es menor que ${num_1} y ${num_3}`)
  }
}if (num_3 < num_1 ){
  if (num_3 < num_2){
    console.log(`${num_3} es menor que ${num_1} y ${num_2}`)
  }
} else {
  console.log ("Puede que exista dos valores iguales")
}