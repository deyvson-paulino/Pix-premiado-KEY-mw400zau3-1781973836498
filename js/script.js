
const sorteios = [
{
    //cod vendedor: "adminDeyvson",
    codigo: "PE01062026-00001",
    data: "01/06/2026, 15:02:50",
    encerrado: "",
    bolaPrincipal: 42,
    bolasSorte: [8, 68, 74]
},
{
    //cod vendedor: "malu00001",
    codigo: "PE15062026-00002",
    data: "15/06/2026, 20:00:00",
    encerrado: "",
    bolaPrincipal: 55,
    bolasSorte: [10, 20, 30]
},
{
    //cod vendedor: "vanusa00002",
    codigo: "PE15062026-00002",
    data: "15/06/2026, 20:00:00",
    encerrado: "",
    bolaPrincipal: 55,
    bolasSorte: [10, 20, 30]
}
];

const sorteioAtual = sorteios[0];


const numeroSorteado = sorteioAtual.bolaPrincipal;

const numeroSorte1 = sorteioAtual.bolasSorte[0];
const numeroSorte2 = sorteioAtual.bolasSorte[1];
const numeroSorte3 = sorteioAtual.bolasSorte[2];
//let pedido = 2; //Isolar pedidos.

//PE31052026-00001
//31/05/2026, 15:32:19
//31/05/2026, 16:33:58

   /*-----------------*/
      
      let premioPrincipal = 2500;
let maiorCota = 500;
let blSorte = (50*3);

     /* let numeroSorteado = 0;
      let numeroSorte1 = 8;
      let numeroSorte2 = 68;
      let numeroSorte3 = 74;*/
      //OBS. (1nº abaixo de 50; 2nº acima de 50)
      //O valor total das 3 bolas tem que no mínimo se pagar
      let nMinVendas = 81;
//let pedido = 2; //Isolar pedidos.
      let pedido;
   /*-----------------*/
let vPremio = 166.05 + premioPrincipal + maiorCota + blSorte;
      let statusPag;   
      let buscarPedidoIsooado = pedido;

function copyText() {
            const textElement = document.getElementById("textToCopy");
            const text = textElement.innerText;
            navigator.clipboard.writeText(text).then(() => {
                alert("Texto copiado!");
            }).catch(err => {
                console.error("Erro ao copiar texto:", err);
            });
        }

//video principal - Federal
    document.getElementById("video-principal").innerHTML =
  ` 
                    <iframe src="https://www.youtube.com/embed/XNhQaqyyW1I?si=00jRfOsCUtly2Jx"  id="videoPrincipal" width="100%" height="240" frameborder="0" allowfullscreen></iframe>
  `;
  
  //video comprar - Ensinando
  document.getElementById("video-comprar").innerHTML =
  `
                <div class="video-thumbnail" data-bs-toggle="modal" data-bs-target="#videoModal" data-video="https://www.youtube.com/embed/k50DR20SX5U?si=SMHVmws1wwkeBBsi">
                    <img src="image/jogo-6-6-1130x580.jpg" alt="Vídeo 1" class="img-fluid">
                </div>
  `;

        const productsList = document.getElementById("products-list");
        const cartItems = document.getElementById("cart-items");
        const cartCount = document.getElementById("cart-count");
        const totalPrice = document.getElementById("total-price");
        const checkoutForm = document.getElementById("checkout-form");
        const purchaseList = document.getElementById("purchase-list");

        const adminResetButton = document.getElementById("admin-reset-button");
        const adminPasswordInput = document.getElementById("admin-password");

        let cart = [];
        let usedOrderNumbers = JSON.parse(localStorage.getItem("usedOrderNumbers")) || [];
        let purchasedProducts = JSON.parse(localStorage.getItem("purchasedProducts")) || [];
        let purchaseHistory = JSON.parse(localStorage.getItem("purchaseHistory")) || [];

        const storePhoneNumber = "5581984294752"; // Número da loja no formato com código do país (55)
        
        const colorDiv = document.getElementById('cor');
const colorButton = document.getElementById('trocaCor');

function changeColor() {
  const hasSecondColor = colorDiv.classList.contains('second');
  if (hasSecondColor) {
    colorDiv.classList.remove('second')
  } else {
    colorDiv.classList.add('second')
  }
}

         function generateProducts() {
            productsList.innerHTML = "";
            for (let i = 1; i <= 100; i++) {
                if (purchasedProducts.includes(i)) continue;

                let product = {
                    id: i,
                    name: i,
                    price: i.toFixed(2)
                };

                let productDiv = document.createElement("div");
                
  let buttonClass = cart.some(item => item.id === i) ? "added" : "";
  
                productDiv.classList.add("product");
                productDiv.innerHTML = `<div class="product-item">
                    <h3 style="width: 60px; height: 60px; font-size: 2rem; color: #4682B4; text-align: center; background: radial-gradient(circle, rgba(255,255,255,1) 33%, rgba(198,203,207,1) 100%); box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2); border-radius: 50%; margin: 0 auto; padding-top:13px;margin-bottom: 10px;">${product.name}</h3>
                    <p>R$ ${product.price}</p>
                     <button id="btn-${product.id}" class="${buttonClass}" onclick="addToCart(${product.id}, '${product.name}', ${product.price})">Adicionar</button>
                    </div>
                `;
                productsList.appendChild(productDiv);
            }
        }

        function addToCart(id, name, price,) {
          
            if (cart.some(item => item.id === id)) {
                alert("Este produto já está no carrinho!");
                return;
            }

            cart.push({ id, name, price });
            updateCart();
            
    let button = document.getElementById(`btn-${id}`);
    if (button) {
        button.classList.add("added");
    }
        }

        function removeFromCart(id) {
            cart = cart.filter(item => item.id !== id);
            updateCart();
            
    let button = document.getElementById(`btn-${id}`);
    if (button) {
        button.classList.remove("added");
    }
        }

        function updateCart() {
            cartItems.innerHTML = "";
            let total = 0;
            cart.forEach(item => {
                total += item.price;
                let li = document.createElement("li");
                li.innerHTML = `${item.name} - R$${item.price.toFixed(2)}
                                <button id="x" onclick="removeFromCart(${item.id})"><!--❌--><p>x</p></button><hr>`;
                cartItems.appendChild(li);
            });

            totalPrice.innerText = total.toFixed(2);
            cartCount.innerText = cart.length;
        }

        function toggleCart() {
            document.getElementById("cart").classList.toggle("hidden");
        }

        function checkout() {
            if (cart.length === 0) {
                alert("O carrinho está vazio!");
                return;
            }
            checkoutForm.classList.remove("hidden");
        }

        function generateOrderNumber() {
            let orderNumber = 1;
            
            while (usedOrderNumbers.includes(orderNumber)) {
                orderNumber++;
            }
            usedOrderNumbers.push(orderNumber);
            localStorage.setItem("usedOrderNumbers", JSON.stringify(usedOrderNumbers));
            return orderNumber;
        }

        function sendOrder() {
            let name = document.getElementById("buyer-name").value;
            let phone = document.getElementById("buyer-phone").value;

            if (!name || !phone) {
                alert("Preencha seu nome e telefone!");
                return;
            }

            let orderNumber = generateOrderNumber();
            let message = `*Pedido #${orderNumber}*\nNome: ${name}\nTelefone: ${phone}\n\n*Produtos:*`;

            cart.forEach(item => {
                message += `\n- ${item.name} - R$${item.price.toFixed(2)}`;
                purchasedProducts.push(item.id);
            });

            message += `\n\n*Total: R$ ${totalPrice.innerText}*`;

            let whatsappURL = `https://wa.me/55${storePhoneNumber}?text=${encodeURIComponent(message)}`;
            window.open(whatsappURL, "_blank");

            localStorage.setItem("purchasedProducts", JSON.stringify(purchasedProducts));

            let orderData = {
                orderNumber: orderNumber,
                name: name,
                products: cart.map(item => item.name),
                total: totalPrice.innerText
            };
            purchaseHistory.push(orderData);
            localStorage.setItem("purchaseHistory", JSON.stringify(purchaseHistory));
            
    document.getElementById("buyer-name").value = "";
    document.getElementById("buyer-phone").value = "";

            cart = [];
            updateCart();
            checkoutForm.classList.add("hidden");
            generateProducts();
            displayPurchaseHistory();
            calcularMaiorCota()
            
    document.querySelectorAll(".added").forEach(button => {
        button.classList.remove("added");
    });
    
        }

const adminPassword = "1234";
let isAdminAuthenticated = false;

function authenticateAdmin() {
    const password = prompt("Por favor, insira a senha de administrador:");
    if (password === adminPassword) {
        isAdminAuthenticated = true;
        alert("Autenticação bem-sucedida!");
    } else {
        alert("Senha incorreta! Você não tem permissão para mudar o status.");
    }
}

function getPurchaseHistoryFromStorage() {
    const storedHistory = localStorage.getItem('purchaseHistory');
    return storedHistory ? JSON.parse(storedHistory) : [];
}

function savePurchaseHistoryToStorage(purchaseHistory) {
    localStorage.setItem('purchaseHistory', JSON.stringify(purchaseHistory));
}

function displayPurchaseHistory(orderNumberToFind = null) {
    const purchaseHistory = getPurchaseHistoryFromStorage();
    purchaseList.innerHTML = "";
    let totalPerCustomer = {}; 
    let grandTotal = 0; 

    /*purchaseHistory.forEach(order => {
        if (!totalPerCustomer[order.name]) {
            totalPerCustomer[order.name] = 0;
        }
        totalPerCustomer[order.name] += parseFloat(order.total);
        grandTotal += parseFloat(order.total);
    });*/
    
let totalPago = 0;
let totalReservado = 0;

purchaseHistory.forEach(order => {

    const valor = parseFloat(order.total);

    if (!totalPerCustomer[order.name]) {
        totalPerCustomer[order.name] = 0;
    }

    totalPerCustomer[order.name] += valor;

    grandTotal += valor;

    if (order.paid) {
        totalPago += valor;
    } else {
        totalReservado += valor;
    }

});



//============

    for (let customer in totalPerCustomer) {
        let customerTotal = totalPerCustomer[customer];

        let customerDiv = document.createElement("div");
        customerDiv.classList.add("purchase-item");
        customerDiv.innerHTML = `
<div id="separator-clientes" class="elementor-divider-separator">
						</div>
            <strong>Cliente: ${customer}</strong><br>
            Total Gasto: <strong>R$ ${customerTotal.toFixed(2)}</strong><hr>
            <strong style="padding-left: 5px; border-left: 3px solid orange;">Histórico de Pedidos:</strong>
            <!--<div style="width: 80px; height: 3px; background: #969d9d;"></div>--><br><br>
        `;

        purchaseHistory.forEach(order => {
            if (order.name === customer) {
                if (orderNumberToFind === null || order.orderNumber == orderNumberToFind) {
                    let buttonLabel = order.paid ? "Pago" : "Reservado";
                    let buttonColor = order.paid ? "green" : "orange";

                    let orderDiv = document.createElement("div");
                    orderDiv.innerHTML = `
                        <strong>Pedido #${order.orderNumber}</strong><br>
                        Números: ${order.products.join(", ")}<br>
                        Total: R$ ${parseFloat(order.total).toFixed(2)}<br>
                        <button id="pay-btn-${order.orderNumber}" style="background-color: ${buttonColor}; color: white; padding: 5px 10px; border: none; cursor: pointer;">
                            ${buttonLabel}
                        </button>
                        <br><br>
                    `;

                    let button = orderDiv.querySelector(`#pay-btn-${order.orderNumber}`);
                    button.addEventListener("click", function () {
                        if (!isAdminAuthenticated) {
                            authenticateAdmin();
                        }

                        if (isAdminAuthenticated) {
                            order.paid = !order.paid;
                            savePurchaseHistoryToStorage(purchaseHistory);
                            displayPurchaseHistory(orderNumberToFind); 
                            let confirmExit = confirm('Status alterado com sucesso! Aperte "Ok" Para continuar administrando ou "Cancelar" para sair do modo admin.');
                            if (!confirmExit) {
                              window.location.reload()
                              /*  window.location.href =
                              "home.html"; */// Defina a página de saída
                            }
                        } else {
                            alert("Você não tem permissão para alterar o status do pedido.");
                        }
                    });

                    customerDiv.appendChild(orderDiv);
                }
            }
        });

        purchaseList.appendChild(customerDiv);
    }

//let comissao = grandTotal * (10/100);
let comissao = 0;
let mensagem = "";

if (grandTotal >= 3570) {
    comissao = grandTotal * 0.10;

    mensagem = `
        Comissão: 10%
        <br>
        Meta máxima atingida.
    `;
}
else if (grandTotal >= 3321) {
    comissao = grandTotal * 0.05;

    const falta10 = 3570 - grandTotal;

    mensagem = `
        Comissão: 5%
        <br>
        Faltam R$ ${falta10.toFixed(2)} para atingir 10%.
    `;
}
else {
    const falta5 = 3321 - grandTotal;
    const falta10 = 3570 - grandTotal;

    mensagem = `
        Faltam R$ ${falta5.toFixed(2)} para atingir 5%.
        <br>
        Faltam R$ ${falta10.toFixed(2)} para atingir 10%.
    `;
}


    let lucro = grandTotal-vPremio;
               let acumular = lucro * (25/100);
               
    let totalDiv = document.getElementById("totalVendido").innerHTML = `
        <h3>Total de Todas as Compras: <strong>R$ ${grandTotal.toFixed(2)}</strong></h3>
        
        <br><br>
        
        <div id="totalVendido">

    <h3 style="color:green;">
        ✅ Total Pago:
        <strong>R$ ${totalPago.toFixed(2)}</strong>
    </h3>

    <h3 style="color:orange;">
        🟡 Total Reservado:
        <strong>R$ ${totalReservado.toFixed(2)}</strong>
    </h3>

    <br><br>
</div>

<!--==============-->
                      <h3>Dados do Sorteio</h3>
    
                      
       <p><b>sorteio-100-construcao-plataforma-19-marco_2025-v1.0</b></p>
       
    <p><b>Código Sorteio:</b>  ${codSorteio} </p>
    <p><b>Data Sorteio:</b> ${dataSorteio}</p>
    <p><b>Sorteio Encerrado:</b>${encerrarSorteio}</p>
    <p><b>Cotas Vendidas:</b> R$ ${grandTotal}</p>
    
    <p><b>Lucro:</b> R$ ${lucro.toFixed(2)}</p>
    <p><b>Lucro Líquido:</b> R$ ${lucro-acumular.toFixed(2)}</p>
    <p><b>Acumulado:</b> R$ ${acumular.toFixed(2)}</p>
    
    <p><b>Comissão:</b> R$ ${comissao.toFixed(2)}</p>
    <p>${mensagem}</p>
    
    

    `;
    
    let calcStatus;
    if (grandTotal >= 3000) {
      calcStatus = "Sortear!";
    }else{
      calcStatus = "Não Sortear!!!";
    }
    let totalDiv2 = document.createElement("div");
    totalDiv2.innerHTML = `
        <h3 style="color: #969d9d;"><strong>${calcStatus}</strong></h3>
    `
    
    purchaseList.appendChild(totalDiv2);
    
}

displayPurchaseHistory();

function resetLocalStorage() {
            const adminPassword = adminPasswordInput.value;
            const adminPasswordCorrect = "admin123";
            
            if (adminPassword === adminPasswordCorrect) {
                localStorage.removeItem("usedOrderNumbers");
                localStorage.removeItem("purchasedProducts");
                localStorage.removeItem("purchaseHistory");

                purchasedProducts = [];
                usedOrderNumbers = [];
                purchaseHistory = [];

                alert("Histórico de pedidos foi resetado com sucesso!");
                generateProducts();
                displayPurchaseHistory();
            } else {
                alert("Senha do administrador incorreta!");
            }

            adminPasswordInput.value = "";
        }

        adminResetButton.addEventListener("click", resetLocalStorage);


        generateProducts();
        displayPurchaseHistory(buscarPedidoIsooado);
    
    let productTotal = purchasedProducts.reduce(
    (total, numero) => total + Number(numero),
    0
);

/*let productTotal = 
               purchasedProducts [0]
               + purchasedProducts [1]
               + purchasedProducts [2]
               + purchasedProducts [3]
               + purchasedProducts [4]
               + purchasedProducts [5]
               + purchasedProducts [6]
               + purchasedProducts [7]
               + purchasedProducts [8]
               + purchasedProducts [9]
               + purchasedProducts [10]
               + purchasedProducts [11]
               + purchasedProducts [12]
               + purchasedProducts [13]
               + purchasedProducts [14]
               + purchasedProducts [15]
               + purchasedProducts [16]
               + purchasedProducts [17]
               + purchasedProducts [18]
               + purchasedProducts [19]
               + purchasedProducts [20]
               + purchasedProducts [21]
               + purchasedProducts [22]
               + purchasedProducts [23]
               + purchasedProducts [24]
               + purchasedProducts [25]
               + purchasedProducts [26]
               + purchasedProducts [27]
               + purchasedProducts [28]
               + purchasedProducts [29]
               + purchasedProducts [30]
               + purchasedProducts [31]
               + purchasedProducts [32]
               + purchasedProducts [33]
               + purchasedProducts [34]
               + purchasedProducts [35]
               + purchasedProducts [36]
               + purchasedProducts [37]
               + purchasedProducts [38]
               + purchasedProducts [39]
               + purchasedProducts [40]
               + purchasedProducts [41]
               + purchasedProducts [42]
               + purchasedProducts [43]
               + purchasedProducts [44]
               + purchasedProducts [45]
               + purchasedProducts [46]
               + purchasedProducts [47]
               + purchasedProducts [48]
               + purchasedProducts [49]
               + purchasedProducts [50]
               + purchasedProducts [51]
               + purchasedProducts [52]
               + purchasedProducts [53]
               + purchasedProducts [54]
               + purchasedProducts [55]
               + purchasedProducts [56]
               + purchasedProducts [57]
               + purchasedProducts [58]
               + purchasedProducts [59]
               + purchasedProducts [60]
               + purchasedProducts [61]
               + purchasedProducts [62]
               + purchasedProducts [63]
               + purchasedProducts [64]
               + purchasedProducts [65]
               + purchasedProducts [66]
               + purchasedProducts [67]
               + purchasedProducts [68]
               + purchasedProducts [69]
               + purchasedProducts [70]
               + purchasedProducts [71]
               + purchasedProducts [72]
               + purchasedProducts [73]
               + purchasedProducts [74]
               + purchasedProducts [75]
               + purchasedProducts [76]
               + purchasedProducts [77]
               + purchasedProducts [78]
               + purchasedProducts [79]
               + purchasedProducts [80]
               + purchasedProducts [81]
               + purchasedProducts [82]
               + purchasedProducts [83]
               + purchasedProducts [84]
               + purchasedProducts [85]
               + purchasedProducts [86]
               + purchasedProducts [87]
               + purchasedProducts [88]
               + purchasedProducts [89]
               + purchasedProducts [90]
               + purchasedProducts [91]
               + purchasedProducts [92]
               + purchasedProducts [93]
               + purchasedProducts [94]
               + purchasedProducts [95]
               + purchasedProducts [96]
               + purchasedProducts [97]
               + purchasedProducts [98]
               + purchasedProducts [99]
               + purchasedProducts [100];*/
               
               let premio = vPremio;
               let condicao = productTotal >= premio;
               let dados;
               
               let blSorteDivide = blSorte / 3;
      
      

let st = purchasedProducts.filter(el => el === numeroSorteado);     



let b1 = purchasedProducts.filter(el => el === numeroSorte1);

let b2 = purchasedProducts.filter(el => el === numeroSorte2);

let b3 = purchasedProducts.filter(el => el === numeroSorte3);

if (condicao) {
    document.getElementById("purchase-sorteio").innerHTML = `
    <div style="font-size: 2rem; color: #28a745; text-align: center;">✓</div>
    `
    
} else {
   document.getElementById("purchase-sorteio").innerHTML = `
    <div style="font-size: 2rem; color: #28a745; text-align: center;">❌</div><br>
    <!--<p style="text-align: center;">R$ ${productTotal}</p><br>--><br>`;
};

document.getElementById("dados").innerHTML =
  ` 
  <h1 style="text-align: center; font-size: 18px;">Bola Sorteada</h1>
       <div style="width: 120px; height: 120px; font-size: 3rem; color: #4682B4; text-align: center; background: radial-gradient(circle, rgba(255,255,255,1) 33%, rgba(198,203,207,1) 100%); box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2); border-radius: 50%; margin: 0 auto; padding-top:30px;margin-bottom: 20px; margin-top: 20px;">${st}</div><br>
       
  <h1 style="text-align: center; font-size: 18px;">Bolas da Sorte</h1>
  <div style="display: flex; margin:20px;">
       <div style="width: 60px; height: 60px; font-weight: bold; font-size: 1.5rem; color: #4682B4; text-align: center; background: radial-gradient(circle, rgba(255,255,255,1) 33%, rgba(198,203,207,1) 100%); box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2); border-radius: 50%; margin: 0 auto; padding-top:13px;">${b1}</div>
       
       <div style="width: 60px; height: 60px; font-weight: bold; font-size: 1.5rem; color: #4682B4; text-align: center; background: radial-gradient(circle, rgba(255,255,255,1) 33%, rgba(198,203,207,1) 100%); box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2); border-radius: 50%; margin: 0 auto; padding-top:13px;">${b2}</div>
       
       <div style="width: 60px; height: 60px; font-weight: bold; font-size: 1.5rem; color: #4682B4; text-align: center; background: radial-gradient(circle, rgba(255,255,255,1) 33%, rgba(198,203,207,1) 100%); box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2); border-radius: 50%; margin: 0 auto; padding-top:13px;">${b3}</div>
  </div>
  
  <h1>Buscar Pedidos</h1>
  
  <div id="separator" class="elementor-divider-separator">
						</div>
						
       <input type="text" id="searchInput" placeholder="Digite o número sorteado" value="${st}">
<button onclick="searchProduct()">Buscar Número</button>
<div id="searchResult"></div><br>

    <div id="busca-id-compra">
    </div>
<br>
    `
    
   function searchProduct() {
    let searchTerm = document.getElementById("searchInput").value.trim().toLowerCase();
    let searchResultDiv = document.getElementById("searchResult");
    searchResultDiv.innerHTML = "";

    if (searchTerm === "") {
        searchResultDiv.innerHTML = "<p>Digite um nome ou código de produto para buscar.</p>";
        return;
    }

    let foundOrders = [];

    purchaseHistory.forEach(order => {
        if (order.products.some(product => product.toLowerCase() === searchTerm)) {
            foundOrders.push(order.orderNumber);
        }
    });

    if (foundOrders.length > 0) {
        searchResultDiv.innerHTML = `<p>O número "${searchTerm}" foi encontrado nos seguintes pedidos:</p>`;
        foundOrders.forEach(orderNumber => {
            let orderDiv = document.createElement("div");
            orderDiv.innerHTML = `<strong>Pedido #${orderNumber}</strong><br>
            `;
      searchOrderByNumber(orderNumber);      
            searchResultDiv.appendChild(orderDiv);
        });

    } else {
        searchResultDiv.innerHTML = `<p>O número "${searchTerm}" não foi encontrado em nenhum pedido.</p>`;
      searchOrderByNumber(0);      
    }
}  

function alteraDiv(){
                    var destino = document.getElementById("minhadiv");
                    destino.value = document.getElementById("orcamentoAssuntoForm").value;;
              }

    function searchOrderByNumber(orderNumber) {
    let foundOrder = purchaseHistory.find(order => order.orderNumber === orderNumber);

    if (foundOrder) {
      let dadosIdVenda = document.getElementById("busca-id-compra").innerHTML =
  `<h3>Dados do Cliente:</h3>
  <b>Nome do Comprador:</b> ${foundOrder.name}<br>
            <b>Número do Pedido:</b> ${foundOrder.orderNumber}<br><br>
            `;
            
    } else {
      let msgId = document.getElementById("busca-id-compra").innerHTML = "Número não vendido";
    }
};

 let sortear = productTotal >= premio
            
            if (sortear) {
    document.getElementById("alertaSorteio").innerHTML = `
      <div style="font-size: 5rem; color: #28a745; text-align: center;"> Sortear!!!</div><br>
       <div style="width: 120px; height: 120px; font-size: 3rem; color: #4682B4; text-align: center; background: radial-gradient(circle, rgba(255,255,255,1) 33%, rgba(198,203,207,1) 100%); box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2); border-radius: 50%; margin: 0 auto; padding-top:30px;">${st}</div>
    `
    
} else {
   document.getElementById("alertaSorteio").innerHTML = `
    <div style="font-size: 2rem; color: #28a745; text-align: center;">❌</div><br>
    <p style="text-align: center; color: red;">R$ ${productTotal}</p>
    <p style="text-align: center; color: #28a745;"><b style="color: #000;">Meta</b><i style="color: #000;"> (Prêmios):</i> R$ ${premio}</p> <br>`;
}
let secret = document.getElementById("secret").innerHTML = `


 
    <p><b>Prêmios Total:</b> R$ ${premio}</p>
    <hr>
    <p><b>Prêmio Prêmio Principal:</b> R$ ${premioPrincipal}</p>
    <p><b>Prêmio Maior Cota:</b> R$ ${maiorCota}</p>
    <p><b>Prêmio Bolas da Sorte:</b> R$ ${blSorte}</p>
    <hr>
    <p><b>Prêmios 1 Bola:</b> R$ ${blSorteDivide}</p>
    <p><b>Prêmios 2 Bolas:</b> R$ ${blSorteDivide*2}</p>
    
    <br><br>
    
            <h3>Números Sorteados</h3>
           <b>Prêmio Principal:</b> ${st}<br>
           <b>Bola da Sorte 1º nº:</b> ${b1}<br>
           <b>Bola da Sorte 2º nº:</b> ${b2}<br>
           <b>Bola da Sorte 3º nº:</b> ${b3}<br><br
           
 <div id="resultado" style="font-size: 20px; font-weight: bold;"></div><br><br>
    <div>
    ✓ Venda minima: <b>81nºs</b> = 3.321R$ (5% de comissão)<br>
    <b>Comissão: R$ 166,05</b>
    <br />
    ou
    <br />
    ✓ Venda minima: <b>84nºs</b> = 3.570R$ (10% de comissão)<br>
    <b>Comissão: R$ 357,00</b><br />
✓ Nºs Restantes: 19 / 16nºs<br />
19nºs: Restam: 1.729R$<br>
16nºs: Restam: 1.480R$<br>
✓Vendas Total: 5.050R$ total<br>
✓ Prêmios: 3150 premio [2500(sorteio) + 500(mais cota) + 150(bolas sorteadas)]<br>
✓ Premio por bola: 50<br>
✓ Lucro Total: 1.395R$ lucro<br>
✓Comissão: 10% 505R$<br>
✓Acumula (25% sob o lucro; 33,33% sob o lucro líquido): 6,90% 348,75R$ acumulado<br>
✓ Lucro Líquido: 20,72% 1.046,25R$ lucro liquido<br><br>
✓ Distribuição 79,28%: 4.003,75R$ (Acumular; Prêmios; comissão)<br>
 </div><br><br>
 
            <input type="button" value="Fechar Mensagem" onClick="window.location.reload()">
    `;

        function verificarSenha() {
            var senhaCorreta = "admin123";
            var senhaDigitada = document.getElementById("senha").value;
            var conteudo = document.getElementById("conteudo");

            if (senhaDigitada === senhaCorreta) {
                conteudo.style.display = "block";
                document.getElementById("senha").value = "";
            } else {
                alert("Senha incorreta! Tente novamente.");
            }
        }
    
        function calcularSoma(n) {
            return (n * (n + 1)) / 2;
        }

        const soma = calcularSoma(nMinVendas);

        document.getElementById("resultado").innerText = "A soma de 1 a " + nMinVendas + " é: R$ " + soma + "! 👉Bolas mínimas a serem vendidas: 81."//79.";
