document.addEventListener("DOMContentLoaded", () => {

    const dashboard = {

        leads: 0,
        clientes: 0,
        consultorias: 0,
        conversao: 0

    };

    atualizarDashboard(dashboard);

});

function atualizarDashboard(dados){

    document.getElementById("totalLeads").textContent = dados.leads;

    document.getElementById("totalClientes").textContent = dados.clientes;

    document.getElementById("totalConsultorias").textContent = dados.consultorias;

    document.getElementById("taxaConversao").textContent = dados.conversao + "%";

}
