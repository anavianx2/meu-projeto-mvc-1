// main.js

// Função principal (ação do usuário)
function acaoPrincipal() {
    alert("Produto Adicionado ao Carrinho!");

    // Feedback visual (UX)
    const botao = document.getElementById("btnPrincipal");

    if (botao) {
        botao.style.backgroundColor = "green";
    }
}

// Evento de clique
document.addEventListener("DOMContentLoaded", () => {
    const botao = document.getElementById("btnPrincipal");

    if (botao) {
        botao.addEventListener("click", acaoPrincipal);
    }
});
