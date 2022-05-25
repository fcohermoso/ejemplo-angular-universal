import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDigimonsComponent } from './lista-digimons.component';

describe('ListaDigimonsComponent', () => {
  let component: ListaDigimonsComponent;
  let fixture: ComponentFixture<ListaDigimonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaDigimonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDigimonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
