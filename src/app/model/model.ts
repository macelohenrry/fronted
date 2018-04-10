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
    MsgInfoAlterada = "Deseja realmente sair? As informações alteradas serão pedidas."
}