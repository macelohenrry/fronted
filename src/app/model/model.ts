export class Acesso {
    username: string;
    role: Role[];
}

export class Role {
    role: string;
}

export class Beneficio {
    id: number;
    descricao: string;
    status: boolean
}

export enum EMensage {
    ErroLogin = "Não foi possivel autenticar, verifique as informações!",
    ErroCampoObrigatorio = "Campo obrigatório!",
    MsgSucessoBeneficio = "As Informações foram salvas com sucesso.",
    MsgInfoSairRota = "Tem certeza que deseja sair dessa página? Quaisquer modificações serão perdidas."
}