// Función para generar nombres aleatorios
function generarNombres(cantidad) {
    let nombres = ["Juan", "María", "Pedro", "Ana", "Luis", "Sofía", "Diego", "Laura", "Carlos", "Lucía"];
    let resultados = [];

    for (let i = 0; i < cantidad; i++) {
        let nombreAleatorio = nombres[Math.floor(Math.random() * nombres.length)];
        resultados.push(nombreAleatorio);
    }

    return resultados;
}

// Función para generar apellidos aleatorios
function generarApellidos(cantidad) {
    let apellidos = ["González", "Rodríguez", "López", "Martínez", "Pérez", "Gómez", "Sánchez", "Díaz", "Fernández", "Moreno"];
    let resultados = [];

    for (let i = 0; i < cantidad; i++) {
        let apellidoAleatorio = apellidos[Math.floor(Math.random() * apellidos.length)];
        resultados.push(apellidoAleatorio);
    }

    return resultados;
}

// Generar nombres aleatorios
let nombresAleatorios = generarNombres(15); // Cambia el número para generar más o menos nombres

// Generar apellidos aleatorios
let apellidosAleatorios = generarApellidos(15); // Cambia el número para generar más o menos apellidos

// Combinar nombres y apellidos en un array de nombres completos
let nombresCompletos = [];                 
for (let i = 0; i < nombresAleatorios.length; i++) {
    let nombreCompleto = nombresAleatorios[i] + " " + apellidosAleatorios[i];
    nombresCompletos.push(nombreCompleto);
}

console.log("Nombres Completos:");
console.log(nombresCompletos);
