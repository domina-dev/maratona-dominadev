import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarParametrosComponent } from './editar-parametros.component';

describe('EditarParametrosComponent', () => {
  let component: EditarParametrosComponent;
  let fixture: ComponentFixture<EditarParametrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarParametrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarParametrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
