import { fetchDataFromSuperbase } from "../api/api.js";
let userName = "";

document.getElementById('loginButton').addEventListener('click', async () => {
    const user = await signIn();
    if(user) {
        window.location.href = 'PaginaInicialLogado.html';
    }
});

async function signIn() {

    const emailUsuario = document.getElementById('userEmailInput').value;
    const password = document.getElementById('userPasswordInput').value;

    const userResponse = await fetchDataFromSuperbase('usuario', ['nomeusuario', 'emailusuario', 'senhausuario'], [{ columnName: 'emailusuario', columnValue: emailUsuario }, { columnName: 'senhausuario', columnValue: password }])
        .then(({ data, error }) => {
            if (!error) {
                return data[0];
            }
            return false
        })
        .catch(err => console.error("Erro na requisição:", err));

    userName = userResponse.nomeusuario;
    localStorage.setItem('userName', userName);
    return userResponse;
}

export {
    signIn,
    userName
}