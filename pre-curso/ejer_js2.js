let arr_numeros = [10, 20, 30];

let longitud = arr_numeros.length;

let int_suma = 0;

for (let i = 0; i < longitud; i++) {
  int_suma += arr_numeros[i];
}

console.log("La suma de los números es:", int_suma);