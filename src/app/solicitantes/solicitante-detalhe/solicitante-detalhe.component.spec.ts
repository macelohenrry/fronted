import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitanteDetalheComponent } from './solicitante-detalhe.component';

describe('SolicitanteDetalheComponent', () => {
  let component: SolicitanteDetalheComponent;
  let fixture: ComponentFixture<SolicitanteDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitanteDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitanteDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
