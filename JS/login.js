const toggleLink = document.getElementById("toggle-link");
const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");
const formTitle = document.getElementById("form-title");

toggleLink.addEventListener("click", (e) => {
  e.preventDefault();
  const isLoginVisible = loginForm.style.display !== "none";
  loginForm.style.display = isLoginVisible ? "none" : "block";
  registerForm.style.display = isLoginVisible ? "block" : "none";
  formTitle.textContent = isLoginVisible ? "Crear Cuenta" : "Iniciar Sesión";
  toggleLink.textContent = isLoginVisible
    ? "¿Ya tienes cuenta? Inicia sesión"
    : "¿No tienes cuenta? Crear una";
});
