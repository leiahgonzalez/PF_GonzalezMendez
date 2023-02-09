var form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("my-form-status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          status.innerHTML = Swal.fire(
  'Muchas Gracias por tu consulta',
  'Nos pondremos en contacto cuanto antes',
  'success'
);
          form.reset()
        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
            } else {
              Swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: 'Algo salio mal!',
  
})
            }
          })
        }
      }).catch(error => {
        Swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: 'Algo salio mal!',
  
})
      });
    }
    form.addEventListener("submit", handleSubmit)

