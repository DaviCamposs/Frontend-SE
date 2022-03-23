export interface ModulosResponse {
    sucesso: boolean
    modulos?: Modulo[]
} 

export interface CursoResponse {
    sucesso: boolean
    curso?: Curso
}

export interface Modulo {
    nome: string
    descricao: string
    cursos: Curso[]
}

export interface Curso {
    _id: string
    nome: string
    titulo: string
    descricao: string
    imagem: string
    conteudo: string
    tags: string[]
}