import { Curso } from './../shared/modulosResponse.interface';
import { ModulosService } from './../shared/modulos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.scss']
})
export class CursoComponent implements OnInit {

  id: string = '1'
  curso!: Curso

  constructor(private route: ActivatedRoute, private modulosService: ModulosService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(param =>
      this.id = param['id']
    )
    this.getCurso()
    console.log(this.curso.conteudo)
  }

  getCurso() {
    this.modulosService.getCurso(this.id).subscribe(
      res => {
        this.curso = res.curso!
        this.curso.conteudo = unescape(this.curso.conteudo)
        //console.log(res)
      }, erro => {
        this.router.navigateByUrl('modulos')
      }
    )
  }

}
