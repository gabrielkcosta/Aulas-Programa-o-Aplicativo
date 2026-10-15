import { epi } from '../model/epi.js';
import { 
    cadastrarEpi, 
    listarEpis, 
    buscarEpiPorIndice, 
    atualizarEpi, 
    excluirEpi 
} from '../repository/epiRepository.js';

export function cadastrar(codigo, nome, numeroCertificado, quantidadeEstoq) {
    const novoEpi = new epi(codigo, nome, numeroCertificado, quantidadeEstoq);
    cadastrarEpi(novoEpi);
}

export function listar() {
    const epis = listarEpis();
    for (let i = 0; i < epis.length; i++) {
        const item = epis[i];
        console.log(`Índice: ${i} - Código: ${item.codigo}, Nome: ${item.nome}, CA: ${item.numeroCertificado}, Quantidade: ${item.quantidadeEstoq}`);
    }
}

export function buscar(indice) {
    const item = buscarEpiPorIndice(indice);
    if (!item) {
        console.log("Erro: EPI não encontrado no índice informado.");
        return null;
    }
    return item;
}

export function atualizar(indice, codigo, nome, numeroCertificado, quantidadeEstoq) {
    if (!buscarEpiPorIndice(indice)) {
        console.log("Erro: EPI não encontrado no índice informado.");
        return;
    }
    const epiAtualizado = new epi(codigo, nome, numeroCertificado, quantidadeEstoq);
    atualizarEpi(indice, epiAtualizado);
}

export function excluir(indice) {
    if (!buscarEpiPorIndice(indice)) {
        console.log("Erro: EPI não encontrado no índice informado.");
        return;
    }
    excluirEpi(indice);
}

export function adicionarEstoque(indice, valor) {
    const item = buscarEpiPorIndice(indice);
    if (!item) {
        console.log("Erro: EPI não encontrado no índice informado.");
        return;
    }
    item.adicionarQuantidade(valor);
}

export function retirarEstoque(indice, valor) {
    const item = buscarEpiPorIndice(indice);
    if (!item) {
        console.log("Erro: EPI não encontrado no índice informado.");
        return;
    }
    item.retirarQuantidade(valor);
}