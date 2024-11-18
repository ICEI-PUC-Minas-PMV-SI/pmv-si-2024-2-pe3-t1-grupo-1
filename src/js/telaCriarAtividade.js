var btnAdicionar = document.getElementById("openModal");
var modalContainer = document.getElementById("modalContainer");
var conteudoModal = document.getElementById("conteudoModal");
 
// Clicando sobre o botão adicionar
btnAdicionar.onclick = function() {
    modalContainer.style.display = "block";
    
    fetch('criar_atividadeFisica.html')
    .then(response => response.text())
    .then(html => {
        conteudoModal.innerHTML = html;
        
        var btnVoltar = conteudoModal.querySelector("#btnvoltar");
        if (btnVoltar) {
            btnVoltar.onclick = function() {
modalContainer.style.display = "none";  // Fecha o modal
            };
        }

        var btnFiltrar = conteudoModal.querySelector("#btnfiltrar");
        if (btnFiltrar) {
            btnFiltrar.onclick = function() {
            
modalContainer.style.display = "none"; 
        
            };
        }
    })
    .catch(error => console.error("Um erro foi encontrado durante a execução do código", error));
}