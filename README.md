# 🧮 Calculadora com Histórico (React + .NET + MySQL)
Este projeto é uma calculadora funcional com operações básicas que salva o resultado de cada cálculo em um banco de dados e exibe um histórico de operações.

🔧 Tecnologias
Front-End
React

fetch (requisições HTTP nativas)

styled-components

Back-End
ASP.NET Core Web API

Entity Framework Core

MySQL

📦 Estrutura
🔹 Backend (calculadora_back/)
Context.cs – Contexto do banco de dados.

Operacao.cs – Modelo com Id, Expressao, Resultado.

OperacaoController.cs – Controller com rotas de POST e GET.

Program.cs – Configurações da API, CORS, EF Core e Swagger.

🔹 Frontend (calculadora_front/)
App.js – Componente principal com a calculadora e histórico.

components/Button.js – Botões numéricos e operacionais.

components/Input.js – Visor da calculadora.

styles.js – Estilização com styled-components.

