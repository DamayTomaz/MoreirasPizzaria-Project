function alterarImagem() {
    var imagens = [
        "../img/On.png",
        "../img/Off.png"
    ];

    var data = new Date();
    var hora = data.getHours();

    var imagem = document.getElementById("Delivery-On");

    if (hora >= 18 && hora <= 23) { 
        imagem.src = imagens[0]; 
    } else {
        imagem.src = imagens[1]; 
    }
}
alterarImagem();
setInterval(alterarImagem, 60000);