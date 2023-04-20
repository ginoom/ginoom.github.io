const card = document.querySelectorAll(".card")

card.forEach(el =>{
    el.addEventListener("mousemove", e =>{
        let elRect = el.getBoundingClientRect()

        let x = e.clientX - elRect.x
        let y = e.clientY - elRect.y

        let midCardWidth = elRect.width /2
        let midCardHeight = elRect.height /2
        
        let angleX = -(x- midCardWidth) /8
        let angleY = (y- midCardWidth) /8

        let glowX = x / elRect.width * 100
        let glowY = y / elRect.width * 100


        el.children[0].style.transform  =  `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.1)`
        el.children[1].style.transform  =  `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.1)`
        el.children[1].style.background = `radial-gradient(circle at ${glowX}% ${glowX}%, rgb(184,196,211),transparent )`

        el.addEventListener("mouseleave", () => {
            el.children[0].style.transform = "rotateX(0) rotateY(0)"
            el.children[1].style.transform = "rotateX(0) rotateY(0)"

        })
    })
})


const showImage = document.getElementById('show-image');
const fullScreenImage = document.getElementById('full-screen-image');

showImage.addEventListener('click', function() {
  fullScreenImage.classList.add('show');
});

