const imgsDestaque = [
    "./assets/img/imagemdestaque.png",
    "./assets/img/frozen3.jpg",
    "./assets/img/frozenlogo.png"
]

let imagemAtual = 1;

const imagem = document.querySelector ('#imagemDestaque')

setInterval(function () {
    imagemAtual++;
    if (imagemAtual >= imgsDestaque.length){
        imagemAtual = 0;
    }

    imagem.src = imgsDestaque[imagemAtual]

}, 1000)