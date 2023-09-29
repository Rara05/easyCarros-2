function openNav() {
    document.getElementById("myNav").style.width = "26rem";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

const BUTTON = document.querySelector("#trocarTema");
const SYNC = document.querySelector("#sync")

// Defina o modo inicial como noturno
document.body.setAttribute("data-dark-mode", true);
BUTTON.setAttribute("aria-pressed", true);

const TOGGLE = () => {
    const IS_PRESSED = BUTTON.matches("[aria-pressed=true]");
    if (SYNC.checked)
        document.body.setAttribute("data-dark-mode", IS_PRESSED ? false : true);
    BUTTON.setAttribute("aria-pressed", IS_PRESSED ? false : true);
};

BUTTON.addEventListener("click", TOGGLE);


// olho ver valor

  function toggleVisibility() {
    var image = document.getElementById('myMoney');
    var visibility = document.getElementById('myVisibility');
    
    // Verificar a visibilidade atual
    var isVisible = window.getComputedStyle(image).display !== 'none';

    // Alternar visibilidade
    if (isVisible) {
        image.style.display = 'none'; // Tornar invisível
    } else {
        image.style.display = 'block'; // Tornar visível
    }

}


function changeImage(img) {
    // Verificar a origem atual da imagem
    var currentSrc = img.src;

    // Definir uma nova origem com base na imagem atual
    var newSrc = (currentSrc.includes('https://img.icons8.com/material-outlined/24/visible--v1.png')) ? 'https://img.icons8.com/material-outlined/24/invisible.png' : 'https://img.icons8.com/material-outlined/24/visible--v1.png';

    // Alterar a origem da imagem
    img.src = newSrc;
}