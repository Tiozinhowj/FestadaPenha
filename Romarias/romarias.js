function Rezeoterco() {
    location.href = "https://formacao.cancaonova.com/espiritualidade/oracao/voce-sabe-como-rezar-o-santo-terco/";
}

const btlogin = document.querySelector('.btlogin')
const menuicon = document.querySelector('.menuicon i')
const navigationMENU = document.querySelector('.navigationMENU')

menuicon.onclick = function () {
    navigationMENU.classList.toggle('open')
    const isOpen = navigationMENU.classList.contains('open')

    menuicon.className = isOpen
        ? 'bx bx-x-circle'
        : 'bx bx-menu';
}