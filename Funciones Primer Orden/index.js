console.log(beers)
/* 1) Generar una función que reciba como parámetro un array de cervezas y devuelva un 
nuevo array con las 10 cervezas más alcohólicas */


/* function diezCervezasMasFuertes(arrayCervezas){

  const gradosCerveza=arrayCervezas.map(elementoActual => elementoActual)

  const ordenGrados = gradosCerveza.sort((a,b) => b.abv - a.abv)

  const cervezaFuerte = ordenGrados.slice(0,10)

  console.log(gradosCerveza)
  console.log(ordenGrados)
  console.log(cervezaFuerte)
}

diezCervezasMasFuertes(beers) */

/* console.log(gradosCerveza) */

/* 2) Generar una función que reciba como parámetro un array de cervezas y devuelva un nuevo 
array con las 10 cervezas menos amargas. */

/* function cervezasAmargas(ordenPorAmargo){

  const ordenPorAmargo = beers.sort((a,b) => b.ibu - a.ibu)

  const masAmargas= ordenPorAmargo.slice(0,10)

  return masAmargas
} */

/* 3) Generar una función que reciba como parámetro el array de cervezas y un valor de 
alcohol. La función debe devolver un nuevo array con las cervezas que no excedan el 
nivel etílico. Cada elemento del nuevo array debe ser un objeto que tenga la 
propiedades nombre, alcohol (abv) y "amargor" (ibu */

/* function valorEtilicoNormal(arrayCervezas,nivelEtilico){

  const cervezaSuave = arrayCervezas.filter(arrayCervezas => arrayCervezas.abv <= nivelEtilico )
  const cervezaNoExcede = cervezaSuave.map((cervezas) => {
    return {
        "nombre":cervezas.name,
        "abv": cervezas.abv,
        "ibu": cervezas.ibu
    }
  })
  console.log(cervezaNoExcede)
  return cervezaNoExcede
  
}

valorEtilicoNormal(beers,10) */


/* const gradosAlcohool = beers.sort((a, b) => a.abv - b.abv)
console.log(gradosAlcohool) */

/* 4) Generar una función que reciba como parámetro un array de cervezas, un nombre de 
propiedad y un valor booleano. Debe devolver un nuevo array con 10 cervezas 
ordenadas por la propiedad ingresada como segundo argumento, de manera 
ascendente si el tercero es true o descendente si es false */

/* function cervezasOrdenadas(arrayCervezas,propiedadCerveza,valorBooleano){
  const cervezasElegidas = arrayCervezas.slice(0,10)  
  const cervezasOrdenadas = cervezasElegidas.sort((a,b) => {

    if (valorBooleano === true) {
      return a[propiedadCerveza]-b[propiedadCerveza]
    } 
    if (valorBooleano === false) {
      return b[propiedadCerveza]-a[propiedadCerveza]
    }
  })
  console.log(cervezasOrdenadas)
  return cervezasOrdenadas
}

cervezasOrdenadas(beers,"abv",false) */



/* 5) Generar una función que reciba como parámetro un array de cervezas y un id. La 
función debe renderizar (renderizar, dibujar, pintar, llenar, etc) en un archivo html una 
tabla que contenga las columnas "Name", "ABV", "IBU", y una fila por cada elemento del 
array. Cada fila debe tener los datos que se piden de cada una de las cervezas. */

/* const table = document.getElementById("table-template")

function crearFila (acc, elementoActual) {
  return acc +  `<tbody>
  <tr>
  <td>${elementoActual.name}</td>
  <td>${elementoActual.abv}</td>
  <td>${elementoActual.ibu}</td>
  </tr>
  </tbody>`
}

function renderizar (arrayCervezas,idElementoHtml) {

const templateTable = arrayCervezas.reduce(crearFila, " ")
idElementoHtml.innerHTML = templateTable

} 

renderizar (beers, table)
 */