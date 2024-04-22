let notas = [
    { nombre: "Juan", nota: 0 },
    { nombre: "Pedro", nota: 0 },
    { nombre: "Maria", nota: 0 },
    { nombre: "Pepe", nota: 0 }
];



for (let i = 0; i < notas.length; i++) {
    notas[i].nota = Math.floor(Math.random() * 9) + 2; // Número aleatorio entre 20 y 100
}
    
 


console.log(notas)
notas.forEach(nota => {
    let clasificar;
    switch(nota.nota){
        case 2: case 3: case 4:
            clasificar = "Insuficiente";
            break;
        case 5: case 6:
            clasificar = "Suficiente";
            break;
        case 7: case 8:
            clasificar = "Bien";
            break;
        case 9:
            clasificar = "Notable";
            break;
        case 10:
            clasificar = "Excelente";
            break;
    }
console.log(nota.nombre + " - "+ nota.nota + "  " + clasificar);
});


function cargarnotas(){
    notas.forEach(nota=>{
        nota.nota = genRandomico(10 , 2);
    });

}


function impNotas(){
    notas.forEach(nota=>{
        console.log(nota.nombre + "" + nota.nota + fclacificar(nota.nota) + "/n");
    });
}
