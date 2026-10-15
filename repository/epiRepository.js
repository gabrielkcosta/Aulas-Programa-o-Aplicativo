const epis = [];

export function cadastrarEpi(epi) {
    epis.push(epi);
}

export function listarEpis() {
    return epis;
}

export function buscarEpiPorIndice(indice) {
    return epis[indice];
}

export function atualizarEpi(indice, epi) {
    epis[indice] = epi;
}

export function excluirEpi(indice) {
    epis.splice(indice, 1);
}