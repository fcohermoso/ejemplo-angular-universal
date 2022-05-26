import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DigimonsService, IDigimon } from '../services/digimons.service';
import { SeoService } from '../services/seo.service';

@Component({
  selector: 'app-digimon',
  templateUrl: './digimon.component.html',
  styleUrls: ['./digimon.component.css']
})
export class DigimonComponent implements OnInit {

  digimon: IDigimon | null = null;

  constructor(
    private digimonsService: DigimonsService,
    private route: ActivatedRoute,
    private seoService: SeoService
  ) { }

  ngOnInit(): void {
    const name = this.route.snapshot.paramMap.get('name');
    this.seoService.cambiarInfoSeo(
      `Digimon - ${name}`,
      {
        keywords: `digimon, ${name}, api`,
        name: `Digimon - ${name}`
      }
    );
    this.digimonsService.getDigimonsByName(name as string)
      .subscribe((digimon) => this.digimon = digimon);
  }


}
