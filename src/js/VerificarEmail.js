// scriptFeedback.js

// Função para capturar o e-mail da URL e exibir a mensagem de feedback
window.onload = function() {
    // Captura o parâmetro da URL
    const urlParams = new URLSearchParams(window.location.search);
    const email = urlParams.get('email');

    // Atualiza o texto de feedback se o e-mail estiver presente
    if (email) {
        document.getElementById('emailFeedback').textContent = email;
        document.getElementById('login').style.display = 'block'; // Exibe a div de feedback
    }
};

// scriptFeedback.js

function reenviarEmail() {
    alert('Um novo e-mail de recuperação foi enviado!'); // Exibe o alerta
}