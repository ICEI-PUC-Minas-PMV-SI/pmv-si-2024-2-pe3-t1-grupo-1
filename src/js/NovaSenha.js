function togglePasswordVisibility(passwordFieldId, iconId) {
    const passwordField = document.getElementById(passwordFieldId);
    const icon = document.getElementById(iconId);
    
    // Alterna o tipo de input entre "password" e "text"
    if (passwordField.type === "password") {
        passwordField.type = "text"; // Exibe a senha
        icon.classList.remove('bi-eye'); // Remove o ícone de olho fechado
        icon.classList.add('bi-eye-slash'); // Adiciona o ícone de olho aberto
    } else {
        passwordField.type = "password"; // Oculta a senha
        icon.classList.remove('bi-eye-slash'); // Remove o ícone de olho aberto
        icon.classList.add('bi-eye'); // Adiciona o ícone de olho fechado
    }
}