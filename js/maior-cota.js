          function calcularMaiorCota() {

    const purchaseHistory =
    JSON.parse(
        localStorage.getItem(
            "purchaseHistory"
        )
    ) || [];

    let totais = {};

purchaseHistory.forEach(order => {

    const nome = order.name;
    const valor = parseFloat(order.total);

    if (!totais[nome]) {

        totais[nome] = {
            total: 0,
            pago: false
        };

    }

    totais[nome].total += valor;

    if(order.paid){
        totais[nome].pago = true;
    }

});

    const ranking =
Object.entries(totais)
.sort((a,b)=>{

    // Pago vem primeiro
    if(
        a[1].pago &&
        !b[1].pago
    ){
        return -1;
    }

    if(
        !a[1].pago &&
        b[1].pago
    ){
        return 1;
    }

    // Se ambos iguais, ordenar pelo valor
    return (
        b[1].total -
        a[1].total
    );

});


    let html = `
    <h2>🏆 Ranking Maior Cota</h2>
    `;

    if (ranking.length === 0) {

        html += `
        <p>Nenhuma compra registrada.</p>
        `;

        document.getElementById(
            "rankingMaiorCota"
        ).innerHTML = html;

        return;
    }

    // TOP 3

    ranking
    .slice(0, 3)
    .forEach((cliente, index) => {

        let medalha = "";

        if(index === 0) medalha = "🥇";
        if(index === 1) medalha = "🥈";
        if(index === 2) medalha = "🥉";

        html += `
        <div style="
            padding:10px;
            margin:5px 0;
            border:1px solid #ddd;
            border-radius:8px;
        ">
            ${medalha}
            <strong>${cliente[0]}</strong>
            <br>
            Total:
            R$ ${cliente[1].total.toFixed(2)}
            
           <br>

${cliente[1].pago
? "✅ Pago"
: "🟡 Reservado"} 

        </div>
        `;

    });
    


 // VERIFICA EMPATE

const maiorValor =
ranking[0][1].total;

const maiorPago =
ranking[0][1].pago;

const empatados =
ranking.filter(cliente =>

    cliente[1].total === maiorValor &&

    cliente[1].pago === maiorPago

);

if (empatados.length > 1) {

    html += `
    <hr>

    <h3>
    ⚠ Empate na Maior Cota
    </h3>
    `;

    empatados.forEach(cliente => {

        html += `
        <div style="
            background:#fff3cd;
            padding:10px;
            margin:5px 0;
            border-radius:8px;
        ">
            <strong>${cliente[0]}</strong>

            <br>

            Total:
            R$ ${cliente[1].total.toFixed(2)}

            <br>

            ${cliente[1].pago
            ? "✅ Pago"
            : "🟡 Reservado"}

        </div>
        `;

    });

}

    document.getElementById(
        "rankingMaiorCota"
    ).innerHTML = html;

}

window.onload = function(){

    generateProducts();

    displayPurchaseHistory(
        buscarPedidoIsooado
    );

    calcularMaiorCota();

};
        