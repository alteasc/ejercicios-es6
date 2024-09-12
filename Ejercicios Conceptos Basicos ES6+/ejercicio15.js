// Crea una función llamada swap que reciba un array y dos parametros que sean indices del array. La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Retorna el array resultante.

// Sugerencia de array:

const fantasticFour = [
  'La antorcha humana',
  'Mr. Fantástico',
  'La mujer invisible',
  'La cosa'
]

function swap(array, index1, index2) {
  const posicion1 = array.indexOf(index1)
  const posicion2 = array.indexOf(index2)
  array.splice(posicion1, 1, index2)
  array.splice(posicion2, 1, index1)
  return array
}

const swappedArray = swap(fantasticFour, 'La antorcha humana', 'La cosa')
console.log(swappedArray)
