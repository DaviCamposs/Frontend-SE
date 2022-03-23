import { Router } from '@angular/router';
import { ModulosService } from './../shared/modulos.service';
import { Modulo } from './../shared/modulosResponse.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modulos-lista',
  templateUrl: './modulos-lista.component.html',
  styleUrls: ['./modulos-lista.component.scss']
})
export class ModulosListaComponent implements OnInit {

  modulos: Modulo[] = []
  cores = ['blue', 'yellow', 'green', 'orange']

  constructor(private modulosService: ModulosService, private router: Router) { }

  ngOnInit(): void {
    this.modulosService.getModulos().subscribe(
      res => {
        this.modulos = res.modulos!
      },
      erro => {
        console.log('erro')
      }
    )
  }

  redirecionarParaCurso(id: string) {
    this.router.navigateByUrl(`modulos/${id}`)
  }

}
