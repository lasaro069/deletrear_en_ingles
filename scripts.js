function separarCaracteres() {
    var palabra = document.getElementById("palabra").value; // recibimos la palabra del documento html y la guardamos en la variable 'palabra' 

    var textoMinusculas = palabra.toLowerCase(); // convertimos todas las palabras a minúsculas y la guardamos en la variable 'textoMinusculas'

    var resultado = document.getElementById("resultado"); // esta variable recibe el resultado del deletreo de la palabra

    resultado.innerHTML = ""; // mostramos el resultado

    // Bucle para separar y mostrar cada carácter
    for (var i = 0; i < textoMinusculas.length; i++) {

        var fonema = textoMinusculas[i];    // esta variable guarda cada fonema convertido en minúscula

        switch(fonema){ // con este condicional se analizará cada letra o caracter y asignará un valor de acuerdo al caso

            case "a":
            fonema = "ei";
            break;

            case "b":
            fonema = "bi";
            break;

            case "c":
            fonema = "ci";
            break;

            case "d":
            fonema = "di";
            break;

            case "e":
            fonema = "i";
            break;

            case "f":
            fonema = "ef";
            break;

            case "g":
            fonema = "yi";
            break;

            case "h":
            fonema = "eich";
            break;

            case "i":
            fonema = "ai";
            break;

            case "j":
            fonema = "jei";
            break;

            case "k":
            fonema = "kei";
            break;

            case "l":
            fonema = "el";
            break;

            case "m":
            fonema = "em";
            break;

            case "n":
            fonema = "en";
            break;

            case "o":
            fonema = "ou";
            break;

            case "p":
            fonema = "pi";
            break;

            case "q":
            fonema = "kiu";
            break;

            case "r":
            fonema = "ar";
            break;

            case "s":
            fonema = "es";
            break;

            case "t":
            fonema = "ti";
            break;

            case "u":
            fonema = "iu";
            break;

            case "v":
            fonema = "vi";
            break;

            case "w":
            fonema = "dabliu";
            break;

            case "x":
            fonema = "exs";
            break;

            case "y":
            fonema = "uai";
            break;

            case "z":
            fonema = "zi";
            break;
        }
        resultado.innerHTML += fonema + " - ";
    }
}
