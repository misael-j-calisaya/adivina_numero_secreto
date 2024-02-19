const readlineSync = require('readline-sync');

// Función para generar un número aleatorio entre min y max
const generarNumeroAleatorio = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Función principal del juego
const adivinaNumeroSecreto = () => {
    console.log("¡Bienvenido al juego Adivina el Número Secreto!");
    console.log("Estoy pensando en un número entre 1 y 100...");

    const numeroSecreto = generarNumeroAleatorio(1, 100);
    let intentos = 0;
    let adivinado = false;

    while (!adivinado) {
        const intentoUsuario = parseInt(readlineSync.question("Intenta adivinar el numero! ingrese el num => "));
        intentos++;

        if (intentoUsuario === numeroSecreto) {
            adivinado = true;
            console.log(`¡Felicidades! ¡Adivinaste el número secreto ${numeroSecreto} en ${intentos} intentos!`);
        } else if (intentoUsuario < numeroSecreto) {
            console.log("El número secreto es más alto. ¡Sigue intentándolo!");
        } else {
            console.log("El número secreto es más bajo. ¡Sigue intentándolo!");
        }
    }
};

module.exports = { adivinaNumeroSecreto };
