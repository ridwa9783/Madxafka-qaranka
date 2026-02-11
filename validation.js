// ===== Select all form inputs =====
let fname = document.getElementById("name");      
let email = document.getElementById("email");     
let phone = document.getElementById("phone");      
let password = document.getElementById("password");
let form = document.querySelector(".register-form"); // Form-ka oo dhan

// == Full Name Validation =
fname.addEventListener("input", (event) => {
    let fullnametext = event.target.value; // Hel xogta uu user-ka geliyey

    // Haddii name-ka uu leeyahay 3–15 characters iyo inaysan numbers ku jirin
    if (fullnametext.length >= 3 && fullnametext.length <= 15) {
        fname.style.border = "2px solid green"; // Border-ka waa green → sax
    } else {
        fname.style.border = "2px solid red";   // Border-ka waa red → qalad
    }

    if (/[1-9]/.test(fullnametext)) {
        fname.style.border = "2px solid red"
    }
});

// ===== Email Validation =====
email.addEventListener("input", (event) => {
    let emailText = event.target.value;

    if (emailText.includes("@") && emailText.includes(".")) {
        email.style.border = "2px solid green";
    } else {
        email.style.border = "2px solid red";
    }
});

// ===== Phone Validation =====
phone.addEventListener("input", (event) => {
    let phoneNumber = event.target.value; // Hel phone number

    // Length 9–15 characters oo dhan numbers kaliya
    if (phoneNumber.length >= 9 && phoneNumber.length <= 15) {
        if (phoneNumber >= 610000000 && phoneNumber <= 619999999) {
            phone.style.border = "2px solid green"
        } else {
            phone.style.border = "2px solid red"
        }
    } else {
        phone.style.border = "2px solid red";   // Qalad
    }
    if (/[a-z]/.test(phoneNumber)) {
        phone.style.border = "2px solid red"
    }
});

// ===== Password Validation Function =====
password.addEventListener("input", (event) => {
    let passwordvalue = event.target.value;

    if (passwordvalue.length < 8) {
        password.style.border = "2px solid red";
    } else if (!/[a-z]/.test(passwordvalue)) {
        password.style.border = "2px solid red";
    } else if (!/[0-9]/.test(passwordvalue)) {
        password.style.border = "2px solid red";
    } else {
        password.style.border = "2px solid green";
    }
});

// ===== Form Submit Event =====
form.addEventListener("submit", (e) => {
    e.preventDefault(); // Jooji form-ka inuu page reload sameeyo

    // Hubi haddii input kasta uu sax yahay (border green)
    let nameValid = fname.style.border === "2px solid green";
    let phoneValid = phone.style.border === "2px solid green";
    let emailValid = email.style.border === "2px solid green";
    let passwordValid = password.style.border === "2px solid green";

    if (nameValid && phoneValid && emailValid && passwordValid) {
        // Haddii sax, show result-ka
        document.getElementById("res-name").textContent = fname.value;
        document.getElementById("res-email").textContent = email.value;
        document.getElementById("res-phone").textContent = phone.value;
        document.getElementById("res-password").textContent = password.value;

        // Reset form-ka kadib submit
        form.reset();

    
       
    } else {
        alert("Fadlan sax xogta qaldan!"); // Haddii qalad jiro, alert
    }
});