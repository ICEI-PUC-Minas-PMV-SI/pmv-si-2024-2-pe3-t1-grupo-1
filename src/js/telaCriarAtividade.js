let btnAdicionar = document.getElementById("openModal");
let modalContainer = document.getElementById("modalContainer");
let conteudoModal = document.getElementById("conteudoModal");

btnAdicionar.addEventListener("click", () => {
    console.log("Clicou no botão adicionar");
})


// Clicando sobre o botão adicionar
// btnAdicionar.onclick = function () {

//     console.log("Clicou no botão adicionar");

//     modalContainer.style.display = "block";

//     fetch('criar_atividadeFisica.html')
//         .then(response => response.text())
//         .then(html => {
//             conteudoModal.innerHTML = html;

//             var btnVoltar = conteudoModal.querySelector("#btnvoltar");
//             if (btnVoltar) {
//                 btnVoltar.onclick = function () {
//                     modalContainer.style.display = "none";  // Fecha o modal
//                 };
//             }

//             var btnFiltrar = conteudoModal.querySelector("#btnfiltrar");
//             if (btnFiltrar) {
//                 btnFiltrar.onclick = function () {

//                     modalContainer.style.display = "none";

//                 };
//             }
//         })
//         .catch(error => console.error("Um erro foi encontrado durante a execução do código", error));
// }