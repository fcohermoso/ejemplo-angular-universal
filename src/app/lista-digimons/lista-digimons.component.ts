import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DigimonsService, IDigimon } from '../services/digimons.service';
import { SeoService } from '../services/seo.service';

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
    private route: ActivatedRoute,
    private seoService: SeoService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const level = params.get('level') || undefined;
      if( level ) {
        this.titulo = 'Digimons: ' + level;
        this.digimonsService.getDigimonsByLevel(level)
          .subscribe((digimons: IDigimon[]) => this.digimons = digimons);
        this.seoService.cambiarInfoSeo(
          this.titulo,
          {
            keywords: `digimon, ${level}, api`,
            name: this.titulo
          }
        );
      } else {
        this.digimonsService.getDigimons()
          .subscribe((digimons: IDigimon[]) => this.digimons = digimons);
      }
    })
  }

}
