// adicionando tributo de mobile
if(innerWidth < 720) {
    document.querySelector('body').classList.toggle('mobile')
}


// Alterando o thema para dark

let darkMode = document.querySelector("#dark")

darkMode.addEventListener('change', () => {
    document.body.classList.toggle('light')
})
