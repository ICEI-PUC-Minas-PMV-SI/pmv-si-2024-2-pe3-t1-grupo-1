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
                    <button onclick="deleteAlimentacao(${alimentacao.id})">Apagar</button>
                    <button onclick='editAlimentacao(${JSON.stringify(alimentacao)})'>Editar</button>
                `;
        containerTabela.appendChild(activityElement);
    });
});

const btnAdicionar = document.getElementById("openModal");
const modalContainer = document.getElementById("modalContainer");
const modalContainerEditar = document.getElementById("modalContainerEditar");

const closeModal = document.getElementById("closeModal");
const closeModalEditar = document.getElementById("closeModalEditar");
const submitModal = document.getElementById("submitModal");
const submitModalEditar = document.getElementById("submitModalEditar");

const inputRefeicao = document.getElementById("refeicao");
const inputAlimentos = document.getElementById("alimentos");
const inputCalorias = document.getElementById("calorias");

const inputRefeicaoEditar = document.getElementById("refeicaoEdit");
const inputAlimentosEditar = document.getElementById("alimentosEdit");
const inputCaloriasEditar = document.getElementById("caloriasEdit");


closeModal.addEventListener("click", () => {
    modalContainer.style.display = "none";
})

closeModalEditar.addEventListener("click", () => {
    modalContainerEditar.style.display = "none";
})

btnAdicionar.addEventListener("click", () => {
    console.log("Clicou no botão adicionar");
    modalContainer.style.display = "flex";
    modalContainer.style.justifyContent = "center";
    modalContainer.style.alignItems = "center";

    inputRefeicao.value = "";
    inputAlimentos.value = "";
    inputCalorias.value = "";

})



submitModal.addEventListener("click", submitModalFunction);

async function submitModalFunction() {
    {
        const userid = localStorage.getItem('userId');
        const data = {
            userid,
            refeicao: inputRefeicao.value,
            alimentos: inputAlimentos.value,
            calorias: inputCalorias.value
        }
        const userResponse = await insertDataIntoSuperbase('Alimentacao', data)
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

window.deleteAlimentacao = deleteAlimentacao;
window.editAlimentacao = editAlimentacao;

async function deleteAlimentacao(id) {
    console.log("Clicou no botão apagar");
    console.log(id);
    const userResponse = await deleteDataFromSuperbase('Alimentacao', id)
        .then(({ deletedData, error }) => {
            if (!error) {
                alert("Alimentação apagada com sucesso!");
                window.location.reload();
                return deletedData;
            }
            return false;
        })
        .catch(err => console.error("Erro na requisição:", err));
}

function editAlimentacao(alimentacao) {

    console.log("Clicou no botão editar");
    modalContainerEditar.style.display = "flex";
    modalContainerEditar.style.justifyContent = "center";
    modalContainerEditar.style.alignItems = "center";

    inputRefeicaoEditar.value = alimentacao.refeicao;
    inputAlimentosEditar.value = alimentacao.alimentos;
    inputCaloriasEditar.value = alimentacao.calorias;


    const id = alimentacao.id;

    submitModalEditar.addEventListener("click", () => updateModalFunction(id));
}

async function updateModalFunction(id) {

    const body = {
        refeicao: inputRefeicaoEditar.value,
        alimentos: inputAlimentosEditar.value,
        calorias: inputCaloriasEditar.value
    }

    const userResponse = await updateDataIntoSuperbase('Alimentacao', body, id)
        .then(({ updatedData, error }) => {
            if (!error) {
                alert("Alimentação atualizada com sucesso!");
                window.location.reload();
                return updatedData;
            }
            return false;
        })
        .catch(err => console.error("Erro na requisição:", err));

    return userResponse;

}