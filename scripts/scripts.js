
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
        img : "../assets/dogecoin.png",
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
    <div class ="">
        <div class ="card m-2 p-3 cardCoins justify-content-center align-items-center">
            <img src="${moneda.img}" class =" imgCoins" alt="">
            <div class ="justify-content-center">
                <h1>Coin: ${moneda.nombre} </h1>
                <h2>Price: $ ${moneda.precio}</h2>
                <label for="cantidad " class ="h5">Cantidad:</label>
                <input type="number" name="cantidad" id="cantidad${moneda.id}"/>
                <button class="btn btn-primary" id="comprar${moneda.id}">Comprar</button>
            </div>
        </div>
    </div>`;
    
    contenedor.append(div)

    const boton = document.getElementById(`comprar${moneda.id}`);
    const cantidad = document.getElementById(`cantidad${moneda.id}`);

    /* boton.addEventListener("click", () => comprar(moneda, parseFloat(cantidad.value))); */
    boton.addEventListener("click", () => Swal.fire({
        title: `Estas seguro de que queres comprar ${moneda.nombre}`,
        text: "NO HABRÁ VUELTA ATRÁS",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Comprar ya!'
        }).then((result) => {
        if (result.isConfirmed) {
            comprar(moneda, parseFloat(cantidad.value));
            Swal.fire(
            'Compra realizada con éxito!!',
            `Disfrutá de tus ${moneda.nombre}'s`,
            'success'
            )
        } else if(result.isDenied) {
            Swal.fire(
                'Compra rechazada',
            )
        }
        }))
        
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
let btnBorrarCarrito = document.getElementById("btnBorrarCarrito");
btnBorrarCarrito.addEventListener("click", () => 
    Swal.fire({
            title: `Billetera vacía`,
            text: "que tenga buen dia",
            icon: 'info',
    }),
    localStorage.removeItem("carrito")
);
let btnInventario = document.getElementById("btnInventario");
btnBorrarCarrito.addEventListener("click", () => 
    console.log("fue borrado"),
    localStorage.removeItem("carrito")
);