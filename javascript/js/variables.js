
/*
let carrito = [ 'leche',1,
                'carne',2,
                'papa',3,
                'fideos',1];


carrito.push("Arroz",5)

console.log("Item: "+carrito[0])
console.log("Cantidad: "+carrito[1])
console.log("Item: "+carrito[3])
console.log("Cantidad: "+carrito[4])
console.log("Item: "+carrito[5])
console.log("Cantidad: "+carrito[6])



console.log(" ")
console.log("Imprecion Completa")
console.log(carrito)



*/
/*
let item = {nombre : 'Leche', cantidad : 1};
console.log("Item: "+ item.nombre);
console.log("cantidad: " + item.cantidad);
*/
/*
let carrito = [ {nombre: 'leche',cantidad: 1},
                {nombre: 'carne',cantidad: 2},
                {nombre: 'papa', cantidad: 3},
                {nombre: 'fideos',cantidad: 1}
            ];




// Imprimir el carrito con etiquetas
console.log("Carrito de compras:");
carrito.forEach(item => {
    console.log("Nombre: " + item.nombre);
    console.log("Cantidad: " + item.cantidad);
    console.log("-----------------------------");
});

console.log("========================================")      
carrito.push({ nombre: "Naranjas", cantidad: 6 });
console.log("===============================================")



// Imprimir el carrito con etiquetas
console.log("Carrito de compras:");
carrito.forEach(item => {
    console.log("Nombre: " + item.nombre);
    console.log("Cantidad: " + item.cantidad);
    console.log("-----------------------------");
});

*/
/*
//Adicionar un nuevo registro
let carrito = [{nombre: "Leche ", cantidad: 2, precio: 7.5 },
                {nombre: 'carne',cantidad: 2, precio: 30.5},
                {nombre: 'papa', cantidad: 3, precio: 5.5},
                {nombre: 'fideos',cantidad: 1, precio: 20.5}
]

item = {nombre}

console.log("Nombre: " + item.nombre);
console.log("Cantidad: " + item.cantidad);
console.log("precio: "+ item.precio);
console.log("Total: "+ item.precio * item.cantidad)
console.log("-----------------------------");
*/

/*
// Imprimir el carrito con etiquetas
console.log("Carrito de compras:");
carrito.forEach(item => {
    console.log("Nombre: " + item.nombre);
    console.log("Cantidad: " + item.cantidad);
    console.log("precio: "+ item.precio);
    console.log("Total: "+ item.precio * item.cantidad)
    console.log("-----------------------------");
});
*/


let num = [3, 1, 5, 2, 4];
let newarray =[];
newarray = num;
newarray.sort();
console.log(newarray)

/*
let carrito = [ {nombre: 'leche',cantidad: 1},
                {nombre: 'carne',cantidad: 1},
                {nombre: 'papa', cantidad: 1},
                {nombre: 'fideos',cantidad: 1}];




let ord = carrito;
ord.sort((a, b) => {if (a.cantidad == b.cantidad){
        if (a.nombre < b.nombre) return -1;
        if (a.nombre > b.nombre) return 1;
        return 0;
    };
    return a.cantidad - b.cantidad });



console.log("Carrito de compras:");
ord.forEach(item => {
    console.log("Nombre: " + item.nombre);
    console.log("Cantidad: " + item.cantidad);
    console.log("-----------------------------");
});

console.log(ord)
*/


let carrito2 = [{nombre: "Leche ", cantidad: 2, precio: 7.5 },
                {nombre: 'carne',cantidad: 2, precio: 30.5},
                {nombre: 'papa', cantidad: 3, precio: 5.5},
                {nombre: 'fideos',cantidad: 1, precio: 20.5}
]

let ord2 = carrito2;
/*
ord2.sort((a,b)=>a.precio - b.precio);
console.log(ord2)
console.log("Carrito de compras:");
ord2.forEach(item => {
    console.log("Nombre: " + item.nombre);
    console.log("Cantidad: " + item.cantidad);
    console.log("Precio: " + item.precio);
    console.log("-----------------------------");
});



ord2.sort((a,b)=> a.nombre.localeCompare(b.nombre));
console.log("Carrito de compras:");
ord2.forEach(item => {
    console.log("Nombre: " + item.nombre);
    console.log("Cantidad: " + item.cantidad);
    console.log("Precio: " + item.precio);
    console.log("-----------------------------");
});

*/

console.log("Lista ordenada por PRECIO")
let carritoordenadoporprecio= carrito2.slice().sort((a,b)=>a.precio - b.precio);
console.log(carritoordenadoporprecio)


console.log("Lista ordenada por NOMBRE")
let carritoordenadopornombre = carrito2.slice().sort((a,b)=> a.nombre.localeCompare(b.nombre));
console.log(carritoordenadopornombre)

