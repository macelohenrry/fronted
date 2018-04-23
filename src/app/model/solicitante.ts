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
}

export class ComposicaoFamiliar {
    id: number;
    nome: string;
    cpf: string;
    idade: number;
    parentesco: string;
    atividade: string;
    renda: number
}

export enum EEstadoCivil {
    "Solteiro(a)" = 1, "Casado(a)" = 2, "Divorciado(a)" = 3, "Viúvo(a)" = 4, "Separado(a)" = 5,
    "União estável" = 6, "Relação Marital" = 7
}

export enum ETrabalho {
    "Formal" = 1, "Informal" = 2, "Desempregado" = 3
}
export enum ECasa {
    "Prória" = 1, "Alugada" = 2, "Cedida" = 3, "Invasão" = 4, "Outros" = 5 
}
export enum EPrevidencia {
    "Aposentadoria" = 1, "Pensionista" = 2, "PCO/LOAS" = 3, "Auxílio Doença" = 4, "Seguro Desenprego" = 5,
    "Outros" = 6
}



