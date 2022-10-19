//Menu Mobile
const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
    if (active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

//Differential
let dcount = 1;
document.getElementById("d-radio1").checked = true;

setInterval(function(){
    nextImageDiff();
}, 4500)

function nextImageDiff(){
    dcount++;
    if (dcount > 4){
        dcount = 1;
    }

    document.getElementById("d-radio"+dcount).checked = true;
}

//Gallery
let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function(){
    nextImage();
}, 4000)

function nextImage(){
    count++;
    if (count > 4){
        count = 1;
    }

    document.getElementById("radio"+count).checked = true;
}