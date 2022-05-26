import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DigimonsService, IDigimon } from '../services/digimons.service';

@Component({
  selector: 'app-lista-digimons',
  templateUrl: './lista-digimons.component.html',
  styleUrls: ['./lista-digimons.component.css']
})
export class ListaDigimonsComponent implements OnInit {
  titulo: string = 'Todos los digimons';
  digimons: IDigimon[] = [];

  constructor(
    private digimonsService: DigimonsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const level = params.get('level') || undefined;
      if( level ) {
        this.titulo = 'Digimons: ' + level;
        this.digimonsService.getDigimonsByLevel(level)
          .subscribe((digimons: IDigimon[]) => this.digimons = digimons);
      } else {
        this.digimonsService.getDigimons()
          .subscribe((digimons: IDigimon[]) => this.digimons = digimons);
      }
    })
  }

}
