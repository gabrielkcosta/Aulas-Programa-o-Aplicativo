import {
    controllerCadastrarEpi,
    controllerListarEpis,
    controllerBuscarEpi,
    controllerAdicionarQuantidade,
    controllerRetirarQuantidade,
    controllerAtualizarEpi,
    controllerExcluirEpi
} from './epiController.js';

import {
    controllerCadastrarFuncionario,
    controllerListarFuncionarios,
    controllerBuscarFuncionario,
    controllerDesativarFuncionario,
    controllerAtivarFuncionario,
    controllerAtualizarFuncionario,
    controllerExcluirFuncionario
} from './funcionarioController.js';

console.log("\n--- 1. Cadastrando EPIs ---");
controllerCadastrarEpi("EPI-001", "Capacete de Segurança", "12345", 10);
controllerCadastrarEpi("EPI-002", "Luva Nitrílica", "54321", 50);
controllerCadastrarEpi("EPI-003", "Óculos de Proteção", "87890", 35);

console.log("\n--- 2. Listando todos os EPIs ---");
controllerListarEpis();

console.log("\n--- 3. Buscando EPI pelo índice (índice 1) ---");
controllerBuscarEpi(1);

console.log("\n--- 4. Adicionando unidades ao estoque (índice 0 +15 unidades) ---");
controllerAdicionarQuantidade(0, 15);

console.log("\n--- 5. Retirando unidades do estoque (índice 2 -10 unidades) ---");
controllerRetirarQuantidade(2, 10);

console.log("\n--- 6. Testando regra: Retirar quantidade maior que a disponível (índice 2 -30 unidades) ---");
controllerRetirarQuantidade(2, 30);

console.log("\n--- 7. Atualizando um EPI pelo índice (índice 1) ---");
controllerAtualizarEpi(1, "EPI-002-REV", "Luva Nitrílica de Alta Resistência", "99999", 100);

console.log("\n--- 8. Excluindo um EPI pelo índice (índice 0) ---");
controllerExcluirEpi(0);

console.log("\n--- 9. Listando novamente os EPIs após as alterações ---");
controllerListarEpis();


console.log("\n--- 1. Cadastrando pelo menos três funcionários ---");
controllerCadastrarFuncionario(101, "Ana Silva", "TI", "Desenvolvedora");
controllerCadastrarFuncionario(102, "Bruno Costa", "Segurança", "Técnico");
controllerCadastrarFuncionario(103, "Carla Souza", "RH", "Analista");

console.log("\n--- 2. Listando todos os funcionários ---");
controllerListarFuncionarios();

console.log("\n--- 3. Buscando um funcionário pelo índice (índice 1) ---");
controllerBuscarFuncionario(1);

console.log("\n--- 4. Desativando um funcionário pelo índice (índice 1) ---");
controllerDesativarFuncionario(1);

console.log("\n--- 5. Mostrando novamente o status desse funcionário ---");
controllerListarFuncionarios();

console.log("\n--- 6. Ativando o mesmo funcionário (índice 1) ---");
controllerAtivarFuncionario(1);

console.log("\n--- 7. Atualizando os dados de um funcionário pelo índice (índice 2) ---");
controllerAtualizarFuncionario(2, 103, "Carla Souza Silva", "RH", "Gerente de RH");

console.log("\n--- 8. Excluindo um funcionário pelo índice (índice 0) ---");
controllerExcluirFuncionario(0);

console.log("\n--- 9. Listando novamente os funcionários após as alterações ---");
controllerListarFuncionarios();