import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCancionesComponent } from './table-canciones.component';

describe('TableCancionesComponent', () => {
  let component: TableCancionesComponent;
  let fixture: ComponentFixture<TableCancionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableCancionesComponent]
    });
    fixture = TestBed.createComponent(TableCancionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
