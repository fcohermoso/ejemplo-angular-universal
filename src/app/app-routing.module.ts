import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DigimonComponent } from './digimon/digimon.component';
import { ListaDigimonsComponent } from './lista-digimons/lista-digimons.component';

const routes: Routes = [
  { path: '', component: ListaDigimonsComponent},
  { path: 'level/:level', component: ListaDigimonsComponent},
  { path: 'name/:name', component: DigimonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
