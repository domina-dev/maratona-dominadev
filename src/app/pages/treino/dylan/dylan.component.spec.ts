import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DylanComponent } from './dylan.component';

describe('DylanComponent', () => {
  let component: DylanComponent;
  let fixture: ComponentFixture<DylanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DylanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DylanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
