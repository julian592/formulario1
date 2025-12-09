// Cambiar entre formularios
function showRegister() {
    document.getElementById("loginForm").classList.remove("active");
    document.getElementById("registerForm").classList.add("active");
}

function showLogin() {
    document.getElementById("registerForm").classList.remove("active");
    document.getElementById("loginForm").classList.add("active");
}

// Registro (local)
document.getElementById("registerForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let nombre = document.getElementById("regName").value;
    let correo = document.getElementById("regEmail").value;
    let contraseña = document.getElementById("regPassword").value;

    // Guardar usuario en localStorage
    let usuario = { nombre, correo, contraseña };
    localStorage.setItem("usuario", JSON.stringify(usuario));

    alert("Registro exitoso");
    showLogin();
});

// Inicio de sesión
document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let correo = document.getElementById("loginEmail").value;
    let contraseña = document.getElementById("loginPassword").value;

    let usuarioGuardado = JSON.parse(localStorage.getItem("usuario"));

    if (usuarioGuardado &&
        usuarioGuardado.correo === correo &&
        usuarioGuardado.contraseña === contraseña) 
    {
        alert("Inicio de sesión exitoso");
    } else {
        alert("Correo o contraseña incorrectos");
    }
});
