import Swal from 'sweetalert2';

export const confirmationAlert = (title, text) => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: title,
      text: text,
      showConfirmButton: true,
    });
  };