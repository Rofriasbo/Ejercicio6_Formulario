document.getElementById('formulario').addEventListener('submit', function(event) {
    const nombre = document.getElementById('nombre').value.trim();
    const apellidoP = document.getElementById('apellidoP').value.trim();
    const apellidoM = document.getElementById('apellidoM').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    let errorMensaje = '';

    if (!nombre) {
        errorMensaje += 'El campo Nombre está vacío.';
    }
    if (!apellidoP) {
        errorMensaje += 'El campo Apellido Paterno está vacío.';
    }
    if (!apellidoM) {
        errorMensaje += 'El campo Apellido Materno está vacío.';
    }
    if (!correo) {
        errorMensaje += 'El campo Correo está vacío.';
    }
    if (!mensaje) {
        errorMensaje += 'El campo Mensaje está vacío.';
    }

    if (errorMensaje !== '') {
        event.preventDefault();
        document.getElementById('error').textContent = errorMensaje;
    } else {
        document.getElementById('error').textContent = '';
    }
});