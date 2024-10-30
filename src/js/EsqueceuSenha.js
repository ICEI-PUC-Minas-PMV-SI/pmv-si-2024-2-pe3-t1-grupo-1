// scriptInserirEmail.js

function enviar() {
    // Captura o valor do e-mail digitado
    const email = document.getElementById('email').value;

    // Verifica se o e-mail não está vazio
    if (email) {
        // Redireciona para a página de verificação de e-mail com o e-mail como parâmetro na URL
        window.location.href = `VerificarEmail.html?email=${encodeURIComponent(email)}`;
    } else {
        alert('Por favor, insira um e-mail válido.'); // Mensagem de erro
    }
}