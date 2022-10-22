let Name = document.querySelectorAll('input[type="text"]');
let userEmail = document.querySelector('input[type="email"]');
let password = document.querySelectorAll('input[type="password"]');

let formArea = document.querySelector('.form_area');
let formDtail = document.querySelector('.form_details');
let infoArea = document.querySelector('.user_data');

let MinmumLenghtForName = 2;
let MinmumLenghtForPassword = 8;

let firstNameSaved = document.querySelector('label[for="first_name_saved"]');
let lasttNameSaved = document.querySelector('label[for="last_name_saved"]');
let emailSaved = document.querySelector('label[for="email_saved"]');

let resgisterBut = document.querySelector('button[type="submit"]');


function showUserInfo() {
    formArea.classList.add('form_hide')
    formDtail.classList.add('smooth_slide')
    formDtail.style.borderRadius = "20px 0 0 20px" ;
    setTimeout(() => {
        formArea.style.display = "none";
        infoArea.style.display = "flex";
        firstNameSaved.nextSibling.nextSibling.innerText = Name[0].value;
        lasttNameSaved.nextSibling.nextSibling.innerText = Name[1].value;
        emailSaved.nextSibling.nextSibling.innerText = userEmail.value;
    }, 2000)
}

function errorMsg(theInput, theMsg) {
    let p = theInput.nextSibling.nextSibling;
    p.style.color = "var(--red)";
    p.innerText = theMsg;
    theInput.style.backgroundColor = "var(--red)";
    setTimeout(() => {
        p.innerText = "";
    }, 10000)
}

function goodAnswer(theInput) {
    let p = theInput.nextSibling.nextSibling;
    p.style.color = "var(--green)";
    p.innerText = "Perfect";
    theInput.style.backgroundColor = "var(--lightGrey)";
    setTimeout(() => {
        p.innerText = "";
    }, 5000)
}


function checkNameValidity(nameInput, theMinmumLenght) {
    if (nameInput.value.length < theMinmumLenght) {
        errorMsg(nameInput, "Too short !");
        return false;
    }
    else if (nameInput.value.match(/\d/)) {
        errorMsg(nameInput, "A name can not contain digits !");
        return false;
    }
    else {
        goodAnswer(nameInput);
        return true;
    }
}

for (let i = 0; i < Name.length; i++) {
    Name[i].addEventListener('input', () => {
        checkNameValidity(Name[i], MinmumLenghtForName);
    })
}

function checkEmailValidity(emailInput) {
    if (emailInput.value.endsWith("@gmail.com")) {
        goodAnswer(emailInput);
        return true;
    }
    else {
        errorMsg(emailInput, "Entre a valid email adresse !");
        return false;
    }
}

userEmail.addEventListener('input', () => {
    checkEmailValidity(userEmail);
})

function checkPasswordValidity(passwordInput, theMinmumLenght) {
    if (passwordInput.value.length < theMinmumLenght) {
        errorMsg(passwordInput, "A password must contain at least 8 characters !");
        return false;
    }
    else if (passwordInput.value.match(/\d/) === null) {
        errorMsg(passwordInput, "The passeword should contain at least a nuber !");
        return false;
    }
    else if (passwordInput.value.match(/\W|_/g) === null) {
        errorMsg(passwordInput, "The passeword should contain at least special character !");
        return false;
    }
    else {
        goodAnswer(passwordInput);
        return true;
    }
}

password[0].addEventListener('input', () => {
    checkPasswordValidity(password[0], MinmumLenghtForPassword);
})

function checkConfirmPassword(passwordInput, confirmPasswordInput) {
    if (passwordInput.value === confirmPasswordInput.value) {
        goodAnswer(confirmPasswordInput);
        return true;
    }
    else {
        errorMsg(confirmPasswordInput, "Passwords are not the same!");
        return false;
    }
}

password[1].addEventListener('input', () => {
    checkConfirmPassword(password[0], password[1]);
})

function checkFormValidity() {
    if (checkNameValidity(Name[0], MinmumLenghtForName)
        && checkNameValidity(Name[1], MinmumLenghtForName) 
        && checkEmailValidity(userEmail)
        && checkPasswordValidity(password[0], MinmumLenghtForPassword)
        && checkConfirmPassword(password[0], password[1])) {
            showUserInfo();
        }
    else {
        errorMsg(resgisterBut, "a field was not properly filled in !");
        Name[0].style.backgroundColor = "var(--red)"
        Name[1].style.backgroundColor = "var(--red)"
        userEmail.style.backgroundColor = "var(--red)"
        password[0].style.backgroundColor = "var(--red)"
        password[1].style.backgroundColor = "var(--red)"
        resgisterBut.style.animation = "error 0.5s"
        setTimeout(() => {
            resgisterBut.style.animation = "none"
        }, 1000)
    }
}

resgisterBut.addEventListener('click', () => {
    checkFormValidity();
})