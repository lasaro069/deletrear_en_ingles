function separarCaracteres() {
    var palabra = document.getElementById("palabra").value;

    var textoMinusculas = palabra.toLowerCase();

    var resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    // Bucle para separar y mostrar cada carácter
    for (var i = 0; i < textoMinusculas.length; i++) {

        var fonema = textoMinusculas[i];
        //resultado.innerHTML += textoMinusculas.charAt(i) + ",";


        switch(fonema){


            case "a":
            fonema = "ai";
            //resultado.innerHTML += fonema + ",";
            
            break;


            case "b":
            fonema = "bi";
            //resultado.innerHTML += textoMinusculas.charAt(i) + ",";
            break;


            case "c":
            fonema = "ci";
            //resultado.innerHTML += textoMinusculas.charAt(i) + ",";
            break;


            case "d":
            fonema = "di";
            //resultado.innerHTML += textoMinusculas.charAt(i) + ",";
            break;


            case "e":
            fonema = "i";
            //resultado.innerHTML += textoMinusculas.charAt(i) + ",";
            break;


            case "f":
            fonema = "ef";
            //resultado.innerHTML += textoMinusculas.charAt(i) + ",";
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
