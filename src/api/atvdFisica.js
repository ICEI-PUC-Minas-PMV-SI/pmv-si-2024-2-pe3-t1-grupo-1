import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";
import { deleteDataFromSuperbase, insertDataIntoSuperbase, updateDataIntoSuperbase } from "./api.js";


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
    const tableName = "AtividadeFisica";
    const { data, error } = await fetchDataFromSupabase(tableName);

    if (error) {
        console.error('Erro ao buscar dados:', error.message);
        return;
    }

    const containerTabela = document.querySelector("#data-container");
    containerTabela.innerHTML = "";
    data.forEach(activity => {
        if (activity.userid !== userId) return;
        const activityElement = document.createElement('div');
        activityElement.innerHTML = ` 
                    <p>${activity.nome}</p> 
                    <p>${activity.duracao}</p>
                    <p>${activity.intensidade}</p>
                    <button class="button-update" onclick='editAtividade(${JSON.stringify(activity)})'>Editar</button>
                    <button class="button-delete" onclick="deleteAtividade(${activity.id})">Apagar</button>
                `;
        containerTabela.appendChild(activityElement);
    });
});

const btnAdicionar = document.getElementById("openModalAtividade");
const modalContainer = document.getElementById("modalContainerAtividade");
const modalContainerEditar = document.getElementById("modalContainerEditarAtividade");

const closeModal = document.getElementById("closeModalAtividade");
const closeModalEditar = document.getElementById("closeModalEditarAtividade");
const submitModal = document.getElementById("submitModalAtividade");
const submitModalEditar = document.getElementById("submitModalEditarAtividade");

const inputNome = document.getElementById("nomeAtividade");
const inputDuracao = document.getElementById("duracao");
const inputIntensidade = document.getElementById("intensidade");

const inputNomeEditar = document.getElementById("nomeEdit");
const inputDuracaoEditar = document.getElementById("duracaoEdit");
const inputIntensidadeEditar = document.getElementById("intensidadeEdit");


closeModal.addEventListener("click", () => {
    modalContainer.style.display = "none";
})

closeModalEditar.addEventListener("click", () => {
    modalContainerEditar.style.display = "none";
})

btnAdicionar.addEventListener("click", () => {
    modalContainer.style.display = "flex";
    modalContainer.style.justifyContent = "center";
    modalContainer.style.alignItems = "center";

    inputNome.value = "";
    inputDuracao.value = "";
    inputIntensidade.value = "";

})



submitModal.addEventListener("click", submitModalFunction);

async function submitModalFunction() {
    {
        const userid = localStorage.getItem('userId');
        const data = {
            userid,
            nome: inputNome.value,
            duracao: inputDuracao.value,
            intensidade: inputIntensidade.value
        }
        console.log(data);
        const userResponse = await insertDataIntoSuperbase('AtividadeFisica', data)
            .then(({ insertedData, error }) => {
                if (!error) {
                    alert("Alimentação cadastrada com sucesso!");
                    window.location.reload();
                    return insertedData;
                }
                return false;
            })
            .catch(err => console.error("Erro na requisição:", err));

        return userResponse;
    }
}

window.deleteAtividade = deleteAtividade;
window.editAtividade = editAtividade;

async function deleteAtividade(id) {
    console.log("Clicou no botão apagar");
    console.log(id);
    await deleteDataFromSuperbase('AtividadeFisica', id)
        .then(() => {
            alert("Atividade Fisica apagada com sucesso!");
            window.location.reload();
            return
        })
        .catch(err => console.error("Erro na requisição:", err));
}

function editAtividade(atividade) {

    console.log("Clicou no botão editar");
    modalContainerEditar.style.display = "flex";
    modalContainerEditar.style.justifyContent = "center";
    modalContainerEditar.style.alignItems = "center";

    inputNomeEditar.value = atividade.nome;
    inputDuracaoEditar.value = atividade.duracao;
    inputIntensidadeEditar.value = atividade.intensidade;


    const id = atividade.id;

    submitModalEditar.addEventListener("click", () => updateModalFunction(id));
}

async function updateModalFunction(id) {

    const body = {
        nome: inputNomeEditar.value,
        duracao: inputDuracaoEditar.value,
        intensidade: inputIntensidadeEditar.value
    }

    console.log(body);
    console.log(id);

    const userResponse = await updateDataIntoSuperbase('AtividadeFisica', body, id)
        .then(({ updatedData, error }) => {
            if (!error) {
                alert("Atividade Fisica atualizada com sucesso!");
                window.location.reload();
                return updatedData;
            }
            return false;
        })
        .catch(err => console.error("Erro na requisição:", err));

    return userResponse;

}