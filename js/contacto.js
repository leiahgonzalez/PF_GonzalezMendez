

const submitButton = document.getElementById("botonformulario");

submitButton.addEventListener("click", () =>{
  Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Consulta Enviada!',
        showConfirmButton: false,
        timer: 1500
      })

})



