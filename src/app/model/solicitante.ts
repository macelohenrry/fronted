import { Beneficio } from './model';

export class Solicitante {
    id:number;
    nome: string;
    apelido: string;
    email: string;
    rg: string;
    orgaoExpedidor: string;
    cpf: string;
    contato: string;
    estadoCivil: EEstadoCivil;
    endereco: Endereco;
    certidaoNascimento: CertidaoNascimento;
    tituloEleitor: TituloEleitor
    dataNascimento: Date;
    dataCadastro: Date;
    nis: string;
    rendaPerCapita: number;
    rendaTotal: number;
    solicitacaoApresentada: string;
    dadoSocioEconomico: DadoSocioEconomico;
    composicaoFamiliar: ComposicaoFamiliar[];
    situacaoApresentada: string;
    observacao: string;
    beneficio: Beneficio;
}

export class Endereco {
    id: number;
    rua: string;
    bairro: string;
    complemento: string;
    numero: string;
    cep: string;
    pontoReferencia: string
}

export class CertidaoNascimento {
    id: number;
    numero: string;
    livro: string;
    folha: string;
    cartorio: string;
}

export class TituloEleitor {
    id: number;
    numero: string;
    zona: string;
    sessao: string;
}

export class DadoSocioEconomico {
    id: number;
    estuda: boolean;
    escola: string;
    serie: string;
    trabalho: ETrabalho;
    funcao: string;
    renda: number;
    casa: ECasa;
    valorAluguel: number;
    outroTipoCasa: string;
    aguaEncanada: boolean;
    esgotoSanitario: boolean;
    energiaEletrica: boolean;
    programaSocial: boolean;
    outroProgramSocial: string;
    valorProgramaSocial: number;
    previdenciaSocial: EPrevidencia;
    outroPrevidenciaSocial: string;
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



