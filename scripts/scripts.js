// INICIALIZAR API COINGECKO CRYPTOS Y IDS
const contenedor = document.getElementById("contenedor")
fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&sparkline=false", ).then((response) =>{
    return  response.json(); 
}).then( (cryptos) => {
    cryptos.forEach(cryptos => {
        let {id, symbol, name, image, current_price, ...rest} = cryptos;
        const div = document.createElement("div");
        current_price = current_price.toFixed(3);
        div.innerHTML = `<div class ="">
        <div class ="card m-2 p-3 cardCoins justify-content-center align-items-center bgcCriptos">
            <img src="${image}" class ="imgCoins" alt="">
            <div class ="text-center justify-content-center">
                <h1>${name} </h1>
                <h2>Price: $ ${current_price}</h2>
                <label for="cantidad " class ="h5">Cantidad:</label>
                <input type="number" name="cantidad" id="cantidad${id}"/>
                <button class="btn btn-primary" id="comprar${id}">Comprar</button>
            </div>
        </div>
    </div>`
    contenedor.append(div);

    
    const boton = document.getElementById(`comprar${id}`);
    const cantidad = document.getElementById(`cantidad${id}`);

    boton.addEventListener("click", () => Swal.fire({
        title: `Estas seguro de que queres comprar ${name}`,
        text: "NO HABRÁ VUELTA ATRÁS",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Comprar ya!'
        }).then((result) => {
        if (result.isConfirmed) {
            comprar(cryptos, parseFloat(cantidad.value));
            Swal.fire(
            'Compra realizada con éxito!!',
            `Disfrutá de tus ${name}'s`,
            'success'
            )
        } else if(result.isDenied) {
            Swal.fire(
                'Compra rechazada',
            )
        }
        }))

    });
    
});
let inventario = JSON.parse(localStorage.getItem("carrito"));
/* Buscador */
document.addEventListener("keyup", e=>{
    if (e.target.matches("#buscador")){
        if (e.key ==="Escape")e.target.value = "";
            document.querySelectorAll(".cardCoins").forEach(Coin =>{
                Coin.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            ?Coin.classList.remove("filtro")
            :Coin.classList.add("filtro")
        })
    }
})

function comprar(producto, cantidad) {
    const carrito = getCarrito();
    const productoEnCarrito = carrito.find(item => item.id === producto.id) || false;
    if (productoEnCarrito) {
        productoEnCarrito.cantidad += parseFloat(cantidad);
        productoEnCarrito.precioTotal += productoEnCarrito.current_price * cantidad;
    } else {
        producto.cantidad = parseFloat(cantidad);
        producto.precioTotal = producto.current_price * cantidad;
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
    title: `¿Estas seguro de que queres VACIAR tu billetera?`,
    text: "NO HABRÁ VUELTA ATRÁS",
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6',
    confirmButtonText: 'Eliminar monedas'
    }).then((result) => {
    if (result.isConfirmed) {
        Swal.fire(
        'Billetera vacía',
        "que tenga buen dia",
        'success',
        ),
        localStorage.removeItem("carrito")
    } else if(result.isDenied) {
        Swal.fire(
            'Billetera intacta',
            "que tenga buen dia",
        )
    }
    }),
);
function invSwal() {
    const inventario = JSON.parse(localStorage.getItem("carrito"));
    let invSee = 'Tus monedas: ';
    inventario.forEach( inv => {
        invSee += ` - Tenés ${inv.cantidad.toFixed(2)} ${inv.name} por un porte total de ${inv.precioTotal}$`;   
    })
    return invSee
};

const btnInventario = document.getElementById("btnInventario");
btnInventario.addEventListener("click", () => 
Swal.fire({
    position: 'top-end',
    title: "INVENTARIO",
    text: `${invSwal()}`,
    showConfirmButton: false,
    timer: 3000,
    }),
    );
localStorage.removeItem("randid")