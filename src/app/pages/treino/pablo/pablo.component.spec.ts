import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PabloComponent } from './pablo.component';

describe('PabloComponent', () => {
  let component: PabloComponent;
  let fixture: ComponentFixture<PabloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PabloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PabloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
