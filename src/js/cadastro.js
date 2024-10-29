
// função de visualizar senha
function togglePasswordVisibility() {
    const passwordField = document.getElementById("password");
    const toggleIcon = document.getElementById("togglePasswordIcon");
    if (passwordField.type === "password") {
      passwordField.type = "text";
      toggleIcon.classList.replace("bi-eye", "bi-eye-slash");
    } else {
      passwordField.type = "password";
      toggleIcon.classList.replace("bi-eye-slash", "bi-eye");
    }
  }