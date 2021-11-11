function AlertConfirm(title, text, callbackYes, callbackNo) {
    Swal.fire({
        title: title,
        text: text,
        type: 'question',
        showCancelButton: true,
        confirmButtonColor: "#1ab394",
        confirmButtonText: "Sim",
        cancelButtonText: "Não"
    }).then((result) => {
        if (result.value) {
            if (typeof callbackYes != 'undefined' && callbackYes != null) {
                eval(callbackYes());
            }
        }
        else {
            if (typeof callbackNo != 'undefined' && callbackNo != null) {
                eval(callbackNo());
            }
        }
    });
}

function Alert(title, text, callbackOk) {
    Swal.fire({
        title: title,
        text: text,
        onClose: () => {
            if (typeof callbackOk != 'undefined' && callbackOk != null) {
                eval(callbackOk());
            }
        }
    });
}

function AlertSuccess(title, text, callbackOk) {
    Swal.fire({
        title: title,
        text: text,
        type: "success",
        onClose: () => {
            if (typeof callbackOk != 'undefined' && callbackOk != null) {
                eval(callbackOk());
            }
        }
    });
}

function AlertSuccessCustom(title, text, html, callbackOk) {
    Swal.fire({
        title: title,
        text: text,
        html: html,
        type: "success",
        onClose: () => {
            if (typeof callbackOk != 'undefined' && callbackOk != null) {
                eval(callbackOk());
            }
        }
    });
}

function AlertWarning(title, text, callbackOk) {
    Swal.fire({
        title: title,
        html: text,
        type: "warning",
        onClose: () => {
            if (typeof callbackOk != 'undefined' && callbackOk != null) {
                eval(callbackOk());
            }
        }  
    });
}

function AlertError(title, text, callbackOk) {
    Swal.fire({
        title: title,
        text: text,
        type: "error",
        onClose: () => {
            if (typeof callbackOk != 'undefined' && callbackOk != null) {
                eval(callbackOk());
            }
        }
    });
}

function AlertWithoutInteraction(text, duration) {
    Swal.fire({
        //position: 'top-end',
        type: 'success',
        title: text,
        showConfirmButton: false,
        timer: duration
    });
}