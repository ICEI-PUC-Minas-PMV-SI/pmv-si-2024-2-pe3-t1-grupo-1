import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabaseUrl = 'https://hevdlxedgheoasmulaur.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhldmRseGVkZ2hlb2FzbXVsYXVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg3MzEzOTcsImV4cCI6MjA0NDMwNzM5N30.sTufiGo0-7FLgoWv4uWTEFyEk0OK_54BGsgcZYtOtD4';
const supabase = createClient(supabaseUrl, supabaseKey);

async function fetchDataFromSupabase(tableName, columns = null, filter = null) {
    let query = supabase.from(tableName).select(columns && columns.join(', '));
    if (filter && Array.isArray(filter)) {
        filter.forEach(f => {
            query = query.eq(f.columnName, f.columnValue);
        });
    }
    const { data, error } = await query;
    return { data, error };
}

const userId = localStorage.getItem('userId');

// Função para aguardar o conteúdo carregar dentro da página com eventListener e em paralelo tenho a chamada da função assincrona
document.addEventListener("DOMContentLoaded", async () => {
    const tableName = "Alimentacao";
    const { data, error } = await fetchDataFromSupabase(tableName);

    if (error) {
        console.error('Erro ao buscar dados:', error.message);
        return;
    }

    const containerTabela = document.querySelector("#data-container");
    containerTabela.innerHTML = "";
    data.forEach(alimentacao => {
        if (alimentacao.userid !== userId) return;
        const activityElement = document.createElement('div');
        activityElement.innerHTML = ` 
                    <p>${alimentacao.refeicao}</p> 
                     <p>${alimentacao.alimentos}</p>
                    <p>${alimentacao.calorias}</p>
                `;
        containerTabela.appendChild(activityElement);
    });
});

let btnAdicionar = document.getElementById("openModal");
let modalContainer = document.getElementById("modalContainer");
let conteudoModal = document.getElementById("conteudoModal");


btnAdicionar.addEventListener("click", () => {
    modalContainer.style.display = "block";

   
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