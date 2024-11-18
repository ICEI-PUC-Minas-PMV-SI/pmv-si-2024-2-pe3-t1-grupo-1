var containerCategoria = document.getElementById("filtroCategoriaContainer");
var conteudoCategoria = document.getElementById("filtroCategoriaModal");
var btnCategoria = document.getElementById("btnCategoriaFiltro");

btnCategoria.onclick = function abrirFiltroCategoria() {
containerCategoria.style.display = "block";
    
    fetch('filtro_categoria.html')
        .then(response_filtroCategoria => response_filtroCategoria.text())
        .then(html_filtroCategoria => {
            conteudoCategoria.innerHTML = html_filtroCategoria;
            
            var btnVoltar = conteudoCategoria.querySelector("#voltarID");
            if (btnVoltar) {
                btnVoltar.onclick = function() {
containerCategoria.style.display = "none";  // Fecha o modal
                };
            }
 
            var btnFiltrar = conteudoCategoria.querySelector("#filtrarID");
            if (btnFiltrar) {
                btnFiltrar.onclick = function() {
                
containerCategoria.style.display = "none"; 
                    console.log("Ação de filtro realizada!");
                };
            }
        })
        .catch(error_filtroCategoria => console.error("Um erro foi encontrado durante a execução do código", error_filtroCategoria));
}