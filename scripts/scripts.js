let coins = [
    {
    nombre : "ethereum",
    precio : 3017,
    codigo : c-1
},
{
    nombre : "bitcoin",
    precio : 39988,
    codigo : c-2
},
{
    nombre : "dogecoin",
    precio : 0.14,
    codigo : c-3
},
{
    nombre : "polygon",
    precio : 1.37,
    codigo : c-4
},
{
    nombre : "riotpoints",
    precio : 0.00704,
    codigo : c-5
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

/* monedas() */
let icoins = coins.length;
// Obtengo la lista
const ul = document.getElementById("coins");
coins.forEach( (coins, icoins) => {

    // Creo el elemento para la lista
    const li = document.createElement("li");
    li.innerText = coins.nombre;
    // Sublista para valor y el cod de la coin
    const sublista = document.createElement("ul");

    // LI de la lista
    const liPrecio = document.createElement("li");
    liPrecio.innerText = `Precio: ${coins.precio}`;
    const liCod = document.createElement("li");
    liCod.innerText = `Codigo: ${coins.codigo}`;

    // Agregamos los LI a la sublista
    sublista.append(liPrecio);
    sublista.append(liCod);

    li.append(sublista);

    // Agregamos el li a la lista
    ul.append(li);
});