# Projeto MVC

## Estrutura do Projeto

O sistema foi organizado seguindo o padrão MVC:

- Models: responsáveis pelos dados e regras de negócio
- Views: responsáveis pela interface do usuário
- Controllers: responsáveis pelo controle das ações

---

## Jornada do Usuário (UX)

### Menu Principal
O sistema possui os seguintes links principais:

- Início
- Cadastro
- Perfil

---

### Fluxo de Ação
Para realizar a ação principal do sistema (ex: cadastro ou aluguel de traje), o usuário segue o fluxo:

1. Acessa a página inicial
2. Clica em "Cadastro" ou ação principal
3. Preenche os dados
4. Recebe confirmação da ação

---

### Acessibilidade
Foi aplicada melhoria de usabilidade com:

- Botões com cores contrastantes (fundo escuro e texto claro)
- Nomes claros e intuitivos nos botões
- Estrutura simples para facilitar navegação
---

## Progresso do Desenvolvimento

### Status das Rotas
Quando o usuário clica no botão principal, o sistema executa uma função JavaScript que simula a comunicação com o Controller e retorna uma resposta de sucesso.

### Feedback ao Usuário
O sistema exibe um alerta informando que o produto foi adicionado e também altera a cor do botão, mostrando visualmente que a ação foi concluída.

### Dificuldades Técnicas
Uma dificuldade encontrada foi separar a lógica de interação (JavaScript) da estrutura da página (HTML), mantendo a organização do padrão MVC.
