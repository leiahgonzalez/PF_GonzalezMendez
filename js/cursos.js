

let carrito = [];

const shopContent = document.getElementById('shopContent');

const verCarrito = document.getElementById('vercarrito');

const modalContainer = document.getElementById('modal-container');



const url = "../data.json";

fetch(url)
.then(res => res.json())
.then(data => mostrarProductos(data))

const contenedorProd = document.querySelector('#container')

function mostrarProductos(productos){
   

    productos.forEach( prod => {
        let card = document.createElement('div');

        card.innerHTML = `
            <img class="imagencard" src="${prod.img}">
            <h3 class="nombrecurso"> ${prod.nombre}</h3>
            <p class="price"> ${prod.precio} $</p>
            <button class="btn-comprar" id="${prod.id}">Comprar</button>
        `
        contenedorProd.appendChild(card);
        
    })
    const botonesComprar = document.querySelectorAll('.btn-comprar');
    botonesComprar.forEach(btn => {
        btn.addEventListener('click', (e)=> agregarAlCarrito(e, productos));
       

        
    })
              
    
    

    
}


function agregarAlCarrito(e, prods){


    const prodElegido = prods.find( el => el.id === parseInt(e.target.id));
    carrito.push(prodElegido)
    
    Swal.fire(
        '¡Agregaste un curso!',
        'Entra en tu carrito para ver tus productos',
        'success'
        )

    


}

verCarrito.addEventListener("click", ()=>{
    
    
        const modalHeader = document.createElement("div");
        modalHeader.className = "modal-header"
        modalHeader.innerHTML = `
        <h1 class="modal-header-title">Carrito</h1>
        `;
        modalContainer.append(modalHeader);
    
        const modalbutton = document.createElement("h1");
        modalbutton.innerText = "X";
        modalbutton.className = "modal-header-button";
    
        modalHeader.append(modalbutton);

        carrito.forEach((prod) =>{
                let carritoContent = document.createElement("div")
                carritoContent.className = "modal-content"
                carritoContent.innerHTML = `
                    <img class="imagencard" src="${prod.img}">
                    <h3 class="nombrecurso">${prod.nombre}</h3>
                    <p class="price">${prod.precio}$</p>
                `;
            modalContainer.append(carritoContent);
               
        });
        const total = carrito.reduce((acc,el) => acc + el.precio, 0);

        const totalBuy = document.createElement("div");
        totalBuy.className = "total-content";
        totalBuy.innerHTML = `total a pagar ${total} $`;
        modalContainer.append(totalBuy);

        modalbutton.addEventListener('click', () =>{
            window.location.href = "../html/pasos.html"
        })
        

})















