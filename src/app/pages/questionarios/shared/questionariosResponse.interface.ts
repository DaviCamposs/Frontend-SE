export interface QuestionariosResponse {
    sucesso: boolean
    questionarios?: Questionario[]
}

export interface QuestionarioResponse {
    _id: string
    sucesso: boolean
    questionario?: Questionario
}

export interface Questionario { 
    questoes: Questao[]
    imagem: string
    tags: string[]
    _id: string
}

export interface Questao {
    enunciado: string
    alternativas: Alternativa[]
    explicacao: string
}

export interface Alternativa {
    resposta: string
    correta: boolean
}