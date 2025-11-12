import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MudarStatusComponent } from './mudar-status.component';

describe('MudarStatusComponent', () => {
  let component: MudarStatusComponent;
  let fixture: ComponentFixture<MudarStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MudarStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MudarStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
