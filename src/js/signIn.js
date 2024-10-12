import { fetchDataFromSuperbase } from "../api/api.js";

document.getElementById('loginButton').addEventListener('click', async () => {
    const user = await signIn();
    if(user) {
        window.location.href = 'pages/home.html';
    }
});

async function signIn() {

    const emailUsuario = document.getElementById('userEmailInput').value;
    const password = document.getElementById('userPasswordInput').value;

    const userResponse = await fetchDataFromSuperbase('usuario', ['emailusuario', 'senhausuario'], [{ columnName: 'emailusuario', columnValue: emailUsuario }, { columnName: 'senhausuario', columnValue: password }])
        .then(({ data, error }) => {
            if (!error) {
                return data[0];
            }
            return false
        })
        .catch(err => console.error("Erro na requisição:", err));

    return userResponse;
}

export {
    signIn
}