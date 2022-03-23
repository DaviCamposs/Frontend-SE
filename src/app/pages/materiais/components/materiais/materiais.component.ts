import { MateriaisService } from './../../shared/materiais.service';
import { Component, OnInit } from '@angular/core';
import { Material } from '../../shared/materiaisResponse.interface';

@Component({
  selector: 'app-materiais',
  templateUrl: './materiais.component.html',
  styleUrls: ['./materiais.component.scss']
})
export class MateriaisComponent implements OnInit {

  materiais: Material[] = []

  constructor(private materiaisService: MateriaisService) { }

  ngOnInit(): void {
    this.materiaisService.getMateriais().subscribe(res => {
      this.materiais = res.materiais!
    })
  }

}
