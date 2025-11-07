import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatheusComponent } from './matheus.component';

describe('MatheusComponent', () => {
  let component: MatheusComponent;
  let fixture: ComponentFixture<MatheusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatheusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatheusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
