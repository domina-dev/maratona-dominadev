import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErickComponent } from './erick.component';

describe('ErickComponent', () => {
  let component: ErickComponent;
  let fixture: ComponentFixture<ErickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErickComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
