function solicitarColor() {
    const colorInput = prompt("Por favor ingresa un color en formato hexadecimal (por ejemplo, #ff0000 para rojo):");
    
    if (colorInput) {
        console.log("El color seleccionado es: " + colorInput);
    } else {
        console.log("No se ingresó ningún color.");
    }
}
