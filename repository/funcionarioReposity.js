const funcionarios = [];

export function cadastrar(funcionarios) {
    funcionarios.push(funcionarios);
}

export function listar() {
    return funcionarios;
}

export function buscarEpiPorIndice(indice) {
    return funcionarios(indice);
}

export function atualizar(indice, funcionarios) {
    if (indice >= 0 && indice < funcionarios.length) {
        funcionarios[indice] = funcionarios;
        return true;
    }

    return false;
}

export function excluir(indice) {
    if(indice >= 0 && indice < funcionarios.length) {
        funcionarios.splice(indice, 1);
        return true;
    }

    return false;
}