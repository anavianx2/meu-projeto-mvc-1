// NavigationController.js

// Este arquivo funciona como o "Controller" do sistema
// Ele recebe ações do usuário e decide o que fazer

function handleNavigation(action) {
    if (action === "cadastrar") {
        // Simula validação de dados
        console.log("Validando dados...");

        // Simula resposta de sucesso
        alert("Cadastro realizado com sucesso!");
    }

    if (action === "produto") {
        alert("Produto adicionado com sucesso!");
    }
}
