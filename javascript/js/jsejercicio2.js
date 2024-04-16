function sumarNumeros() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    
    if (isNaN(num1) || isNaN(num2)) {
        console.log("Por favor ingresa números válidos.");
        return;
    }

    const suma = num1 + num2;
    console.log("La suma de " + num1 + " y " + num2 + " es: " + suma);
}
