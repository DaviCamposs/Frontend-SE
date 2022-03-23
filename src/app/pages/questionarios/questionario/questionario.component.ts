import { QuestionarioService } from './../shared/questionario.service';
import { HttpClient } from '@angular/common/http';
import { Questionario } from './../shared/questionariosResponse.interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-questionario',
  templateUrl: './questionario.component.html',
  styleUrls: ['./questionario.component.scss']
})
export class QuestionarioComponent implements OnInit {

  questionario!: Questionario
  respostas : boolean[] = []
  respostasIndice: number[] = []
  id!: string

  constructor( private questionarioService: QuestionarioService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id']
    })
    this.questionarioService.getQuestionario(this.id).subscribe(
      q => {
        this.questionario = q.questionario!
      },
      erro => {

      }
    )
  }

  verificarResposta(questao: number,alternativa: number) {
    const acertou: boolean = this.questionario?.questoes[questao].alternativas[alternativa].correta == true 
      if(this.respostas[questao] == undefined) {
        this.respostas[questao] = acertou
        this.respostasIndice[questao] = alternativa
      } 
  }

  getRespostaCerta(questao: number): number{
    const alternativa = this.questionario?.questoes[questao].alternativas.findIndex(x => x.correta == true)
    return alternativa ?? 0
  }

  getQtdAcertos() {
    const acertos = this.respostas.filter(Boolean).length
    return acertos
  }

  mostrarFrase() {
    return this.respostas.filter(e => true || false) .length == this.questionario!.questoes.length
  }

  getFrase(): string {
    console.log(this.respostas)
    const acertos = this.getQtdAcertos() / this.questionario!.questoes.length
    let frase = ''
    if (acertos == 1) {
      frase = 'PARABÉNS! VOCÊ ACERTOU TUDO'
    }
    else if (acertos > 0.6) {
      frase = 'MUITO BOM, CONTINUE PRATICANDO'
    } else {
      frase = 'VOCÊ NÃO FOI TÃO BEM MAS CONTINUE TENTANDO'
    }
    return frase
  }

}
