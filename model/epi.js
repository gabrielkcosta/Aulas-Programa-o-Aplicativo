export class epi {
    #quantidadeEstoq;

    constructor(codigo, nome, numeroCertificado, quantidadeEstoq){
        this.codigo = codigo;
        this.nome = nome;
        this.numeroCertificado = numeroCertificado;
        this.#quantidadeEstoq = quantidadeEstoq;
    }

    get quantidadeEstoq() {
        return this.#quantidadeEstoq;
    }

    adicionarQuantidade(valor) {
        if (valor > 0) {
            this.#quantidadeEstoq += valor;
            return true;
        }
        return false;
    }

    retirarQuantidade(valor) {
        if (valor <= this.#quantidadeEstoq) {
            this.#quantidadeEstoq -= valor;
        } else {
            console.log("Erro: Valor maior que a quantidade disponível.");
        }
    }
}