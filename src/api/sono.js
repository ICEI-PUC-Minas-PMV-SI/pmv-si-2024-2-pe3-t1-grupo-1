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
    const tableName = "QualidadeSono";
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
                    <p>${activity.horarioDormir}</p>
                    <p>${activity.horarioAcordar}</p>
                    <button class="button-update" onclick='editSono(${JSON.stringify(activity)})'>Editar</button>
                    <button class="button-delete" onclick="deleteSono(${activity.id})">Apagar</button>
                `;
        containerTabela.appendChild(activityElement);
    });
});

const btnAdicionar = document.getElementById("openModalSono");
const modalContainer = document.getElementById("modalContainerSono");
const modalContainerEditar = document.getElementById("modalContainerEditarSono");

const closeModal = document.getElementById("closeModalSono");
const closeModalEditar = document.getElementById("closeModalEditarSono");
const submitModal = document.getElementById("submitModalSono");
const submitModalEditar = document.getElementById("submitModalEditarSono");

const inputHorarioDormir = document.getElementById("horarioDormir");
const inputHorarioAcordar = document.getElementById("horarioAcordar");

const inputHorarioDormirEditar = document.getElementById("horarioDormirEdit");
const inputHorarioAcordarEditar = document.getElementById("horarioAcordarEdit");


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

    inputHorarioDormir.value = "";
    inputHorarioAcordar.value = "";

})



submitModal.addEventListener("click", submitModalFunction);

async function submitModalFunction() {
    {
        const userid = localStorage.getItem('userId');
        const data = {
            userid,
            horarioDormir: inputHorarioDormir.value,
            horarioAcordar: inputHorarioAcordar.value
        }
        console.log(data);
        const userResponse = await insertDataIntoSuperbase('QualidadeSono', data)
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

window.deleteSono = deleteSono;
window.editSono = editSono;

async function deleteSono(id) {
    console.log("Clicou no botão apagar");
    console.log(id);
    await deleteDataFromSuperbase('QualidadeSono', id)
        .then(() => {
            alert("Sono Fisica apagada com sucesso!");
            window.location.reload();
            return
        })
        .catch(err => console.error("Erro na requisição:", err));
}

function editSono(Sono) {

    console.log("Clicou no botão editar");
    modalContainerEditar.style.display = "flex";
    modalContainerEditar.style.justifyContent = "center";
    modalContainerEditar.style.alignItems = "center";

    inputHorarioDormirEditar.value = Sono.horarioDormir;
    inputHorarioAcordarEditar.value = Sono.horarioAcordar;


    const id = Sono.id;

    submitModalEditar.addEventListener("click", () => updateModalFunction(id));
}

async function updateModalFunction(id) {

    const body = {
        horarioDormir: inputHorarioDormirEditar.value,
        horarioAcordar: inputHorarioAcordarEditar.value
    }

    console.log(body);
    console.log(id);

    const userResponse = await updateDataIntoSuperbase('QualidadeSono', body, id)
        .then(({ updatedData, error }) => {
            if (!error) {
                alert("Sono Fisica atualizada com sucesso!");
                window.location.reload();
                return updatedData;
            }
            return false;
        })
        .catch(err => console.error("Erro na requisição:", err));

    return userResponse;

}