document.body.style.display = "block";
  
  document.addEventListener("contextmenu", e => e.preventDefault());

document.onkeydown = function(e) {
  if (e.key === "F12") return false;
};


const agora = new Date().getTime();
const sessao = JSON.parse(localStorage.getItem("sessao"));

if (!sessao || agora > sessao.expira) {
    localStorage.removeItem("usuarioLogado");
    window.location.href = "login.html";
}

localStorage.setItem("sessao", JSON.stringify({
  expira: new Date().getTime() + (2 * 60 * 60 * 1000) // 2h
}));