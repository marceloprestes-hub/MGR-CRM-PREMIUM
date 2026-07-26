document.addEventListener("DOMContentLoaded", iniciarCRM);

function iniciarCRM(){

    const dashboard = {

        leads:18,

        clientes:12,

        consultorias:7,

        conversao:67,

        faturamento:"R$ 18.750",

        pipeline:11

    };

    atualizarDashboard(dashboard);

    carregarLeads();

    carregarConsultorias();

    carregarAtividades();

}

function atualizarDashboard(dados){

    document.getElementById("totalLeads").textContent=dados.leads;

    document.getElementById("totalClientes").textContent=dados.clientes;

    document.getElementById("totalConsultorias").textContent=dados.consultorias;

    document.getElementById("taxaConversao").textContent=dados.conversao+"%";

    document.getElementById("faturamento").textContent=dados.faturamento;

    document.getElementById("pipeline").textContent=dados.pipeline;

}

function carregarLeads(){

    const lista=document.getElementById("ultimosLeads");

    lista.innerHTML=`

    <li>João Silva • WhatsApp</li>

    <li>Maria Oliveira • Landing Page</li>

    <li>Carlos Souza • Indicação</li>

    <li>Ana Costa • Instagram</li>

    <li>Roberto Lima • Google</li>

    `;

}

function carregarConsultorias(){

    const lista=document.getElementById("consultorias");

    lista.innerHTML=`

    <li>09:00 • João Silva</li>

    <li>10:30 • Empresa Alpha</li>

    <li>14:00 • Maria Oliveira</li>

    <li>16:30 • Roberto Lima</li>

    `;

}

function carregarAtividades(){

    const lista=document.getElementById("atividades");

    lista.innerHTML=`

    <li>✔ Novo Lead recebido</li>

    <li>✔ Consultoria confirmada</li>

    <li>✔ Cliente convertido</li>

    <li>✔ Pipeline atualizado</li>

    <li>✔ Dashboard sincronizado</li>

    `;

}
