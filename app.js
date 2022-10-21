let Name = document.querySelectorAll('input[type="text"]');
let userEmail = document.querySelector('input[type="email"]');
let password = document.querySelector('input[type="password"]');

function errorMsg(errorMsg) {
    let p = document.createElement('p');
    this.parentElement.appendChild(p);
    p.innerText = errorMsg;
}

for (let i = 0; i < Name.length; i++) {
    Name[i].addEventListener('input', () => {
        if (Name[i].value.length < 2) {
            errorMsg("Too short!")
        } else if (Name[i].value.match(/\d/)) {
            errorMsg("A name can not contain didgits !")
        }
    })
}