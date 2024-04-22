/*

let a = 10;
let b = 5;

a +=1;
console.log(a)

a = a + b;
console.log("a=a+b :" + a)


a = 11;
a+= b;
console.log("a=+b :" + a)


if(a%2==0)
    console.log("a es par")
else
    console.log(" a es impar")


*/
let array = [
    { nombre: "Juan", nota: 0 },
    { nombre: "Pedro", nota: 0 },
    { nombre: "Maria", nota: 0 },
    { nombre: "Pepe", nota: 0 }
];

console.log("Array inicial:");
console.log(array);

for (let i = 0; i < array.length; i++) {
    array[i].nota = Math.floor(Math.random() * 9) + 2; // Número aleatorio entre 20 y 100
}

console.log("Array con Notas Aleatorias en el Rango de 20 a 100:");
console.log(array);



// Encontrar la nota mayor
let notaMayor = Math.max(...array.map(item => item.nota));

console.log("Nota Mayor:", notaMayor);

// Encontrar la nota menor
let notaMenor = Math.min(...array.map(item => item.nota));

console.log("Nota Menor:", notaMenor);



//Encontrar Promedio de las notas
let totalNotas = 0;

for (let i = 0; i < array.length; i++) {
    totalNotas += array[i].nota;
}

let promedio = totalNotas / array.length;

console.log("Promedio de Notas:", promedio);
