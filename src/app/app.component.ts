import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejemplo-angular-universal';

  levels = [
    'In Training',
    'Rookie',
    'Champion',
    'Ultimate',
    'Mega',
    'Fresh',
    'Armor'
  ]
}
