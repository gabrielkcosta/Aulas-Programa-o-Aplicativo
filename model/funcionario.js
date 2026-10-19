export class funcionarios {
    matricula
    nome
    setor
    cargo
    #status
    constructor(matricula, nome, setor, cargo, status){
        this.matricula;
        this.setor;
        this.cargo;
        this.#status = "ativo";
    }

    get status(){
        return this.#status;
    }

    ativar() {
        this.#status = "ativo";
    }

    desativar() {
        this.#status = "inativo"
    }
}