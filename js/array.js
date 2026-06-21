const params = new URLSearchParams(window.location.search);
const model = params.get("model");


// "Banco de dados"
const usuarios = [
{
    codigo: "adminDeyvson",
    usuario: "admin",
    senha: "admin123",
    tipo: "vendedor",
    sorteio: "PE01062026-00001",
     data: "01/06/2026, 15:02:50",
    encerrado: ""
},
{
    codigo: "malu00001",
    usuario: "malu",
    senha: "150492",
    tipo: "vendedor",
    sorteio: "PE01062026-00002",
     data: "01/06/2026, 15:02:50",
    encerrado: ""
},
{
    codigo: "vanusa00002",
    usuario: "vanusa",
    senha: "1234@",
    tipo: "vendedor",
    sorteio: "PE01062026-00003",
     data: "01/06/2026, 15:02:50",
    encerrado: ""
}
];

/*
const usuarios = 
 [
  {codigo: "admin00001", usuario: "admin", senha: "admin123", tipo: "vendedor" },
   {codigo: "malu00001", usuario: "malu", senha: "150492", tipo: "vendedor" },
   {codigo: "vanusa00002", usuario: "vanusa", senha: "1234@", tipo: "vendedor" },
    
]
  
*/

function gerarSessionId() {
  return Math.random().toString(36).substring(2) + Date.now();
}

function login() {
  const user = document.getElementById("usuario").value;
  const pass = document.getElementById("senha").value;

  const encontrado = usuarios.find(u => u.usuario === user && u.senha === pass);

  if (encontrado) {
    const sessionId = gerarSessionId();

    const sessao = {
      usuario: encontrado.usuario,
      tipo: encontrado.tipo,
      sessionId: sessionId,
      expira: Date.now() + (2 * 60 * 60 * 1000) // 2 horas
    };

    localStorage.setItem("sessao", JSON.stringify(sessao));

    document.getElementById("msg").innerText = "Login realizado!";

    setTimeout(() => {
      window.location.href = "login.html";
    }, 1000);

  } else {
    document.getElementById("msg").innerText = "Usuário ou senha inválidos";
  }
}