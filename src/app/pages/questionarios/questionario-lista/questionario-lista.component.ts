import { Router } from '@angular/router';
import { Questionario } from './../shared/questionariosResponse.interface';
import { QuestionarioService } from './../shared/questionario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questionario-lista',
  templateUrl: './questionario-lista.component.html',
  styleUrls: ['./questionario-lista.component.scss']
})
export class QuestionarioListaComponent implements OnInit {

  questionarios: Questionario[] = []
  cores = ['blue', 'yellow', 'green', 'orange']

  constructor(private questionarioService: QuestionarioService, private router:Router) { }

  ngOnInit(): void {
    this.questionarioService.getQuestionarios().subscribe(
      q => {
        this.questionarios = q.questionarios!
      },
      erro => {

      }
    )
  }

  redirecionarParaQuestionario(id: string) {
    this.router.navigateByUrl(`questionarios/${id}`)
  }

}
