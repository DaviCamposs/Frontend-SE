export interface MateriaisResponse {
    sucesso: boolean
    materiais?: Material[]
}

export interface Material {
    _id: string
    titulo: string
    descricao: string,
    imagem: string,
    tipo: string
    link: string

}