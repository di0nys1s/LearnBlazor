window.showToastr = (type, message) => {
    if (type === "success") {
        toastr.success(message);
    } else if (type === "error") {
        toastr.error(message);
    }
}

window.showSweetAlert = (type, message) => {
    if (type === "success") {
        Swal.fire({
            title: 'Success',
            text: message,
            icon: 'success',
        });
    } else if (type === "error") {
        Swal.fire({
            title: 'Error',
            text: message,
            icon: 'error',
        });
    }
}