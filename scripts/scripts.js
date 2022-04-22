
let coins = [
    {
    nombre : "ethereum",
    precio : 3017
},
{
    nombre : "bitcoin",
    precio : 39988
},
{
    nombre : "dogecoin",
    precio : 0.14
},
{
    nombre : "polygon",
    precio : 1.37
},
{
    nombre : "riotpoints",
    precio : 0.00704
},
];

alert("Bienvenido a la calculadora de criptomonedas, los precios son unitarios, estan en dolares y te los muestro a continuación:\nEthereum: 3017$\nBitcoin: 39988$\nDogeCoin: 0.14$\nPoligon: 1.37$\nRiotpoints: 0.00704$")

function calculo(moneda, cantidad){
    switch(moneda){
        case "ethereum":
            return coins[0].precio * cantidad;
            break;
        case "bitcoin":
            return coins[1].precio * cantidad;
                break;
        case "dogecoin":
            return (coins[2].precio * cantidad).toFixed(2);
                break;
        case "polygon":
            return (coins[3].precio * cantidad).toFixed(2);
                break;
        case "riotpoints":
            return (coins[4].precio * cantidad).toFixed(3);
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

