import {
    cadastrar,
    listar,
    buscar,
    atualizar,
    excluir,
    adicionarEstoque,
    retirarEstoque
} from './controller/epiController.js';

cadastrar(101, "Capacete de Segurança", 12345, 50);
cadastrar(102, "Luva de Raspa", 67890, 30);
cadastrar(103, "Óculos de Proteção", 11223, 20);

listar();

buscar(1);

adicionarEstoque(0, 15);

retirarEstoque(2, 5);

retirarEstoque(2, 50);

atualizar(1, 102, "Luva de Raspa Reforçada", 67890, 45);

excluir(0);

listar();