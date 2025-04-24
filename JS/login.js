const toggleLink = document.getElementById("toggle-link");
const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");
const formTitle = document.getElementById("form-title");

toggleLink.addEventListener("click", (e) => {
  //e.preventDefault();

  // Quiero evitar hacer un montón de branching por usar el short-hand if else (a ? b : c)
  // así que separé todo con una sola evaluación, no debería cambiar nada - Sebastián
  if (loginForm.style.display !== "none") {
    loginForm.style.display = "none";
    registerForm.style.display = "block";
    formTitle.textContent =  "Crear Cuenta";
    toggleLink.textContent = "¿Ya tienes cuenta? Inicia sesión";
  }
  else {
    loginForm.style.display = "block";
    registerForm.style.display = "none";
    formTitle.textContent ="Iniciar Sesión";
    toggleLink.textContent = "¿No tienes cuenta? Crear una";
  }
});
$( document ).ready(function() {

        $( "button" ).click(function( event ) {
        $.ajax({
              url: "http://localhost:8080/login", // Replace with your actual endpoint URL
              type: "GET",
              data: { name: document.getElementById("login_username").value, password: document.getElementById("login_password").value }, // Optional data to send
              success: function(response) {
                // Handle the response from the Java method
                //console.log("Response from Java:", response);
                if (true == response) {
                  alert("Login successful!")
                  window.location.replace("index.html");
                } else {
                  alert("Incorrect login!")
                }
                
                // Update UI or perform other actions
              },
              error: function(xhr, status, error) {
                  // Handle errors
                  console.error("Error calling Java method:", status, error);
              }
        });
    });
});
