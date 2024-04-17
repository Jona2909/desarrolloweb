
    const num1 = parseFloat(prompt("Ingrese el primer número:"));
    const num2 = parseFloat(prompt("Ingrese el segundo número:"));
    
    if (isNaN(num1) || isNaN(num2)) {
        console.log("Por favor ingrese números válidos.");
    } else {
        const suma = num1 + num2;
        console.log("La suma de " + num1 + " y " + num2 + " es: " + suma);
    }
