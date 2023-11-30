import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompilacaoModalComponent } from './compilacao-modal.component';

describe('CompilacaoModalComponent', () => {
  let component: CompilacaoModalComponent;
  let fixture: ComponentFixture<CompilacaoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompilacaoModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompilacaoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
