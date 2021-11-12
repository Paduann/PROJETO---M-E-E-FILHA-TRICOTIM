var animaScroll = document.querySelector('[data-anima="scroll"]')

var metadeWindow = window.innerHeight * 1.3

function animarScroll() {
    var topoItem = animaScroll.getBoundingClientRect().top;

    var itemVisivel = topoItem - metadeWindow < 0;

    if(itemVisivel) {
        animaScroll.classList.add('aparece-botao')
    } else {
        animaScroll.classList.remove('aparece-botao') 
    }

    console.log(topoItem)
}



window.addEventListener("scroll", animarScroll)