import Swal from 'sweetalert2';

const errorMsj = (status) => {
  if (status === 0) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'No se pudo conectar con el servidor',
    });
  }
  if (status === 400) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Los datos no coinciden, reenvialo',
    });
  }
  if (status === 500) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Tenemos un pequeño problema con el servidor',
    });
  }
};

export default errorMsj