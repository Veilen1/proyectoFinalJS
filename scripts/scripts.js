
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

function buscarMoneda (nombre) {
    return coins.find( coin => {
        return coin.nombre === nombre
    })
}

function monedas () {
    
    let moneda;
    let cantidad;
    let resultado;
    let coin;

    do {
        moneda = prompt("Ingrese el nombre de la moneda que sea comprar y calcular: ").toLowerCase();
        cantidad = parseFloat(prompt("Ingrese la cantidad que quiere comprar: "))
        coin = buscarMoneda(moneda)
        if (coin && cantidad > 0) {
            resultado = coin.precio * cantidad;
            alert('Estas comprando ' + cantidad + ' ' + coin.nombre + ' por: US$ ' + resultado);

        } else {
            alert('Error en el ingreso de datos.')
        }
    } while (!coin || cantidad <= 0);
}

monedas()
