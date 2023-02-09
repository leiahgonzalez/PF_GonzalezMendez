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
    console.log(prods);
    console.log(e.target.id);

    const prodElegido = prods.find( el => el.id === parseInt(e.target.id))
    
    Swal.fire(
        '¡Agregaste un curso!',
        'Entra en tu carrito para ver tus productos',
        'success'
        )

    // console.log(prodElegido);

    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header"
    modalHeader.innerHTML = `
    <h1 class="modal-header-title">Carrito</h1>
    `;
    modalContainer.append(modalHeader);
}
















// let carrito = [];


// const productos = [
//     {id: 1, 
//         nombre:"CURSO DE INTRODUCCIÓN AL DESIGN THINKING ",
//         precio: 10,
//         img: "https://exelearning.net/html_manual/cursomaterialesfp/0_programa/ryanlerch_Book_and_Pen.png",
//     },
//     {id: 2, 
//         nombre:"CURSO DE INNOVACIÓN EN LA EDUCACIÓN CON DESIGN THINKING",
//         precio: 15,
//         img: "https://thumbs.dreamstime.com/b/icono-de-la-combinaci%C3%B3n-innovaci%C3%B3n-y-revoluci%C3%B3n-mezcla-para-insurgencia-logo-159899318.jpg",
//     },
//     {id: 3, 
//         nombre:"CURSO DE EXPERIENCIA DE CLIENTE CON DESIGN THINKING",
//         precio: 20,
//         img: "https://w7.pngwing.com/pngs/44/20/png-transparent-chapel-hill-academy-work-experience-computer-icons-intern-coin-miscellaneous-text-logo-thumbnail.png",
//     },
//     {id: 4, 
//         nombre:"CURSO DE TÉCNICAS DE INNOVACIÓN PARA LA TOMA DE DECISIONES",
//         precio: 10,
//         img: "https://i.pinimg.com/originals/2b/a0/28/2ba028a01a44499fa19f0b4d9fc62bdf.png",
//     }
// ]


// productos.forEach((product) => {
//             let content = document.createElement("div");
//             content.className = "card";
//             content.innerHTML = `
//             <img class="imagencard" src="${product.img}">
//             <h3 class="nombrecurso"> ${product.nombre}</h3>
//             <p class="price"> ${product.precio} $</p>`;
    
//             shopContent.append(content);

//             let comprar = document.createElement("button")
//             comprar.innerText = "Comprar";

//             content.append(comprar);

//             comprar.addEventListener("click", () => {
        
//             carrito.push({
//                 id: product.id,
//                 img : product.img,
//                 nombre: product.nombre,
//                 precio: product.precio,
//             });
//             Swal.fire(
//                 '¡Agregaste un curso!',
//                 'Entra en tu carrito para ver tus productos',
//              'success'
//             )
        
    
//     })
// });
// })
// }


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

    carrito.forEach((product) =>{
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

