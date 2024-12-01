import { insertDataIntoSuperbase } from "../api/api.js";

document.getElementById('signupButton').addEventListener('click', async () => {
    await signUp();
})

async function signUp() {
 
    const nomeusuario = document.getElementById('userNameInput').value;
    const emailusuario = document.getElementById('userEmailInput').value;
    const idadeusuario = document.getElementById('userAgeInput').value;
    const telefoneusuario = document.getElementById('userPhoneInput').value;
    const senhausuario = document.getElementById('userPasswordInput').value;
    const data = { nomeusuario, emailusuario, idadeusuario, telefoneusuario, senhausuario };


    const userResponse = await insertDataIntoSuperbase('usuario', data)
        .then(({ insertedData, error }) => {
            if (!error) {
                alert("Usuário cadastrado com sucesso!");
                window.location.href = 'login.html';
                return insertedData;
            }
            return false;
        })
        .catch(err => console.error("Erro na requisição:", err));

    return userResponse;
}