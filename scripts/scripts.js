let coins = [
        {
        nombre : "ethereum",
        precio : 3017,
        id : 1,
        img : "https://upload.wikimedia.org/wikipedia/commons/b/b7/ETHEREUM-YOUTUBE-PROFILE-PIC.png",
    },
    {
        nombre : "bitcoin",
        precio : 39988,
        id : 2,
        img : "http://pngimg.com/uploads/bitcoin/bitcoin_PNG48.png",
    },
    {
        nombre : "dogecoin",
        precio : 0.14,
        id : 3,
        img : "https://o.remove.bg/downloads/933bed45-23f5-4f80-9910-27c0cc5a5277/kisspng-dogecoin-cryptocurrency-dash-digital-currency-doge-5ad13b0da01474.3329552115236615816557-removebg-preview.png",
    },
    {
        nombre : "polygon",
        precio : 1.37,
        id : 4,
        img : "../assets/polygon.png",
    },
    {
        nombre : "riotpoints",
        precio : 0.00704,
        id : 5,
        img : "https://puntosriot.com/img/riot-point.png",
    },
];

function buscarMoneda (nombre) {
    return coins.find( coin => {
        return coin.nombre === nombre
    })
}
const contenedor = document.getElementById("contenedor");

for (let moneda of coins) {

    const div = document.createElement("div")

    div.innerHTML = ` 
    <div class ="card m-4 cardCoins justify-content-center">
        <img src="${moneda.img}" class ="card-img-top imgCoins" alt="">
        <div class ="card-body">
            <h1>Coin: ${moneda.nombre} </h1>
            <h2>Price: $ ${moneda.precio}</h2>
            <label for="cantidad " class ="h5">Cantidad:</label>
            <input type="number" name="cantidad" id="cantidad${moneda.id}"/>
            <button class="btn btn-primary" id="comprar${moneda.id}">Comprar</button>
        </div>
    </div>`;

    contenedor.append(div)

    const boton = document.getElementById(`comprar${moneda.id}`);
    const cantidad = document.getElementById(`cantidad${moneda.id}`);

    boton.addEventListener("click", () => comprar(moneda, parseFloat(cantidad.value)));
}


function comprar(producto, cantidad) {

    const carrito = getCarrito();
    const productoEnCarrito = carrito.find(item => item.id === producto.id) || false;

    if (productoEnCarrito) {
        productoEnCarrito.cantidad += parseFloat(cantidad);
        productoEnCarrito.precioTotal += productoEnCarrito.precio * cantidad;
    } else {
        producto.cantidad = parseFloat(cantidad);
        producto.precioTotal = producto.precio * cantidad;
        carrito.push(producto);
    }
    saveCarrito(carrito)
}

function getCarrito () {
    return JSON.parse(localStorage.getItem("carrito")) || [];
}

function saveCarrito (carrito) {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}
localStorage.removeItem('randid')