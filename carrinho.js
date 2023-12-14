    // Script para exibir os planos e o valor total do carrinho

        document.addEventListener('DOMContentLoaded', function () {
            // Recupera os dados do localStorage
            const planosEscolhidos = JSON.parse(localStorage.getItem('planosEscolhidos')) || [];
            const valorTotal = localStorage.getItem('valorTotal') || '0.00';

            // Elementos HTML onde os dados serão exibidos
            const carrinhoTableBody = document.querySelector('#carrinhoTable tbody');
            const totalCarrinhoElement = document.querySelector('#totalCarrinho');

            // Exibe os planos no carrinho
            planosEscolhidos.forEach(plano => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${plano.nome}</td>
                    <td>${plano.valor}</td>
                `;
                carrinhoTableBody.appendChild(row);
            });

            // Exibe o valor total
            totalCarrinhoElement.textContent = `R$ ${valorTotal}`;
            
            
            
        });
        



/*
// Função para calcular o valor total
function calcularTotal() {
    let total = 0;

    // Itera sobre as checkboxes para calcular o total
    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            const valor = parseFloat(checkbox.dataset.valor);
            total += valor;
        }
    });

    // Atualiza o total na página
    totalValor.textContent = `R$ ${total.toFixed(2)}`;

    // Salva o total no localStorage
    localStorage.setItem('totalCarrinho', total.toFixed(2));
}

// Função para adicionar listeners às checkboxes
function adicionarListeners() {
    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener('change', () => {
            calcularTotal();
            salvarNoLocalStorage();
        });
    });
}

// Função para salvar os planos escolhidos no localStorage
function salvarNoLocalStorage() {
    const planosEscolhidos = checkboxes
        .filter((checkbox) => checkbox.checked)
        .map((checkbox) => checkbox.dataset.plano);

    localStorage.setItem('planosEscolhidos', JSON.stringify(planosEscolhidos));
}

// Recupera elementos do DOM
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const totalValor = document.getElementById('total-valor');

// Carrega dados do localStorage ao carregar a página
function carregarDadosLocalStorage() {
    const totalSalvo = localStorage.getItem('totalCarrinho');
    const planosSalvos = JSON.parse(localStorage.getItem('planosEscolhidos'));

    if (totalSalvo) {
        totalValor.textContent = `R$ ${totalSalvo}`;
    }

    if (planosSalvos) {
        checkboxes.forEach((checkbox) => {
            if (planosSalvos.includes(checkbox.dataset.plano)) {
                checkbox.checked = true;
            }
        });
    }

    // Exibe os planos escolhidos no carrinho
    exibirPlanosEscolhidos(planosSalvos);
}

// Função para exibir os planos escolhidos no carrinho
function exibirPlanosEscolhidos(planos) {
    const carrinhoItens = document.getElementById('carrinho-itens');

    if (!planos || planos.length === 0) {
        carrinhoItens.innerHTML = '<p>Nenhum plano selecionado.</p>';
        return;
    }

    const listaPlanos = document.createElement('ul');

    planos.forEach((plano) => {
        const item = document.createElement('li');
        item.textContent = plano;
        listaPlanos.appendChild(item);
    });

    carrinhoItens.innerHTML = '';
    carrinhoItens.appendChild(listaPlanos);
}

// Adiciona listeners e carrega dados do localStorage
document.addEventListener('DOMContentLoaded', () => {
    adicionarListeners();
    carregarDadosLocalStorage();
    calcularTotal(); // Para garantir que o total é calculado corretamente ao carregar a página
});
*/
