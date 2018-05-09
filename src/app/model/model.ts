export class User {
    id: number;
    username: string;
    password: string;
    email: string;
    roles: Role[];
}

export class Role {
    id: number;
    name: string;
    descricao: string;
}

export class Beneficio {
    id: number;
    descricao: string;
    status: boolean
}

export enum EMensage {
    ErroInformacaoInvalida = "Algumas informações estão inválidas, verifique-as!",
    ErroLogin = "Não foi possivel autenticar, verifique as informações.",
    ErroCampoObrigatorio = "Obrigatório!",
    ErroPreencherTodosCampos = "Todos os campos são Obrigatório!",
    MsgSucessoBeneficio = "As Informações foram salvas com sucesso.",
    MsgInfoSairRota = "Tem certeza que deseja sair dessa página? Quaisquer modificações serão perdidas."
}

