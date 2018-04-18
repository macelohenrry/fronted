export class Solicitante {
    id:number;
    nome: string;
    apelido: string;
    email: string;
    contato: string;
    rg: string;
    orgaoExpedidor: string;
    dataNascimento: Date;
    nis: string;
    estadoCivil: EstadoCivil;
}

export enum EEstadoCivil {
    "Solteiro(a)" = 1, "Casado(a)" = 2, "Divorciado(a)" = 3, "Viúvo(a)" = 4, "Separado(a)" = 5,
    "União estável" = 6, "Relação Marital" = 7
}


export class EstadoCivil {
    id: number;
    descricao: string;
}