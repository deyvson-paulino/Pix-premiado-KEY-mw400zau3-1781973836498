         /* const codVend = "usuario cod";
          const vendedor = "usuario";
          const codSorteio = "PE30052026-00001";
          
         document.getElementById("infoVendedor").innerHTML = `
  <div id="dados-vendedor" style="margin:20px;">
    <div><strong>Vendedor:</strong> ${vendedor}</div>
    <div><strong>Cód:</strong> ${codVend}</div>
    <div><strong>Sorteio nº:</strong> ${codSorteio}</div>
  </div>

`;*/

const vendedor = localStorage.getItem("usuario");
const codVend = localStorage.getItem("codigo");

const codSorteio = localStorage.getItem("sorteio");


//const codSorteio = "PE01062026-00001";
const dataSorteio = localStorage.getItem("data");

const encerrarSorteio = localStorage.getItem("encerrado");

document.getElementById("infoVendedor").innerHTML = `
  <div id="dados-vendedor" style="margin:20px;">
    <div><strong>Vendedor:</strong> ${vendedor}</div>
    <div><strong>Cód Vendedor:</strong> ${codVend}</div>
    <div><strong>Sorteio nº:</strong> ${codSorteio}</div>
    <div><strong>Abrir Vendas:</strong> ${dataSorteio}</div>
    <div><strong>Encerrar Sorteio:</strong> ${encerrarSorteio}</div>
  </div>
`;


//link
if (localStorage.getItem("usuario") === "admin") {

    document.getElementById("adminMenu").innerHTML = `
           <a
            href="gerar-bola-da-sorte.html"
            style="
                display:inline-block;
                margin-top:10px;
                margin-left: 20px;
                margin-bottom: 30px;
                padding:10px;
                background:green;
                color:white;
                text-decoration:none;
                border-radius:8px;
            "
        >
            🎲 Gerar Bola da Sorte
        </a>
    `;

}

