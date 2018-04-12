export class Solicitante {
    id:number;
    nome: string;
    apelido: string;
    email: string;
    rg: string;
    contato: string;
}

export enum EstadoCivil {
    SOLTEIRO = "Solteiro(a)", CASADO = "Casado(a)", 
    DIVORCIADO = "Divorciado(a)", VIUVO = "Viúvo(a)", SEPARADO = "Separado(a)", 
	UNIAOESTAVEL = "União estável", RELACAOMARITAL = "Relação Marital"
}