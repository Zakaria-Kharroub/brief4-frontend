document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("my-form");
    const nameInput = document.getElementById("fname");
    const emailInput = document.getElementById("email");
    const subjectInput = document.getElementById("subject");
    const messageInput = document.getElementById("message");

    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");
    const subjectError = document.getElementById("subject-error");
    const messageError = document.getElementById("message-error");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 
        let isValid = true;

        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        const nameRegex = /^[a-z0-9_-]{3,15}$/;

        if (nameInput.value.length < 3) {
            isValid = false;
            nameError.textContent = "Le nom doit contenir au moins 3 caractères";
        } else {
            nameError.textContent = "";
        }
        if(!nameRegex.test(nameInput.value))
        {
            isValid = false;
            nameError.textContent = "Veuillez entrer un nom valide";
        } else {
            nameError.textContent = "";
        }
        
        if (!emailRegex.test(emailInput.value)) {
            isValid = false;
            emailError.textContent = "Veuillez entrer une adresse e-mail valide";
        } else {
            emailError.textContent = "";
        }

        if (subjectInput.value === "0") {
            isValid = false;
            subjectError.textContent = "Veuillez sélectionner un sujet";
        } else {
            subjectError.textContent = "";
        }
        if (messageInput.value.length < 10) {
            isValid = false;
            messageError.textContent = "Le message doit contenir au moins 10 caractères";
        } else {
            messageError.textContent = "";
        }
        if (isValid){
           
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
              })
              
              Toast.fire({
                icon: 'success',
                title: 'votre message a bien été envoyé'
              })
        }
    });
});