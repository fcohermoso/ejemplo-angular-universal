import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DigimonsService, IDigimon } from '../services/digimons.service';

@Component({
  selector: 'app-digimon',
  templateUrl: './digimon.component.html',
  styleUrls: ['./digimon.component.css']
})
export class DigimonComponent implements OnInit {

  digimon: IDigimon | null = null;

  constructor(
    private digimonsService: DigimonsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const name = this.route.snapshot.paramMap.get('name');
    this.digimonsService.getDigimonsByName(name as string);
  }


}
