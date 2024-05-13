document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    if (username === "usuario" && password === "senha") {
      alert("Login bem sucedido!");
    } else {
      alert("nome de usuário ou senha invalidos.");
    }
  });
  
  document.getElementById("twitter-login").addEventListener("click", function(event) {
    alert("Login com Twitter clicado!");
  });
  
  