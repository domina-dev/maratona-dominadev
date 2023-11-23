import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelCompilacaoComponent } from './painel-compilacao.component';

describe('PainelCompilacaoComponent', () => {
  let component: PainelCompilacaoComponent;
  let fixture: ComponentFixture<PainelCompilacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PainelCompilacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelCompilacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
