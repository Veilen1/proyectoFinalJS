const ethereum = 3017;
const bitcoin = 39988;
const dogecoin = 0.14;
const polygon = 1.37;
const riotpoints = 0.00704;
alert("Bienvenido a la calculadora de criptomonedas, los precios son unitarios, estan en dolares y te los muestro a continuación:\nEthereum: 3017$\nBitcoin: 39988$\nDogeCoin: 0.14$\nPoligon: 1.37$\nRiotpoints: 0.00704$")

function calculo(moneda, cantidad){
    switch(moneda){
        case "ethereum":
            return ethereum * cantidad;
            break;
        case "bitcoin":
                return bitcoin * cantidad;
                break;
        case "dogecoin":
                return dogecoin * cantidad;
                break;
        case "polygon":
                return polygon * cantidad;
                break;
        case "riotpoints":
                return riotpoints * cantidad;
                break;
        default:
            return false;
            break;
        }
    
}
    let moneda;
    let cantidad;
    let resultado;

do{
    moneda = prompt("Ingrese el nombre de la moneda que sea comprar y calcular: ").toLowerCase();
    cantidad = parseFloat(prompt("Ingrese la cantidad que quiere comprar: "));
    resultado = calculo(moneda, cantidad);

    if(!resultado){
        alert("Valores incorrectos, intente nuevamente");
    } else{
        alert("Estas comprando " + cantidad + moneda + " por: " + resultado + "$ Dolares");
    }
}while(!resultado);

