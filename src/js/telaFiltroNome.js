// variáveis contendo o container e botão que será utilizado
var containerFiltroNome = document.getElementById("filtroNomeContainer");
var conteudoFiltroNome = document.getElementById("filtroNomeModal");
var btnNome = document.getElementById("btnNomeFiltro");

// action para selecionar o botão de filtro e abrir a tela

btnNome.onclick = function abrirFiltroNome (){
    containerFiltroNome.style.display = "block";

    fetch('filtro_nome.html')
        .then(response_filtroNome => response_filtroNome.text())
        .then(html_filtroNome => {
            conteudoFiltroNome.innerHTML = html_filtroNome;
            
            var btnVoltar = conteudoFiltroNome.querySelector("#voltarbtn");
            if (btnVoltar) {
                btnVoltar.onclick = function() {
containerFiltroNome.style.display = "none";  // Fecha o modal
                };
            }
 
            var btnFiltrar = conteudoFiltroNome.querySelector("#filtrarbtn");
            if (btnFiltrar) {
                btnFiltrar.onclick = function() {
                
containerFiltroNome.style.display = "none"; 
                };
            }
        })
        .catch(error => console.error("Um erro foi encontrado durante a execução do código", error));
}
