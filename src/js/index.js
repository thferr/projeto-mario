const botaoTrailer = document.querySelector(".botao-trailer");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const botaoFecharModal = document.querySelector(".fechar-modal");
const linkDoVideo = video.src;

function alternarModal(){
    modal.classList.toggle("aberto");
}


console.log('mostrar o document' ,document);


console.log(document.querySelector(".botao-trailer"));


botaoTrailer.addEventListener("click", () => {
    alternarModal();
 })

console.log(document.querySelector(".fechar-modal"));

botaoFecharModal.addEventListener("click", () => {   
    alternarModal();
    video.setAttribute("src", "");
    video.setAttribute("src", linkDoVideo)
})







