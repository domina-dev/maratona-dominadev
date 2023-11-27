import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeandersonComponent } from './geanderson.component';

describe('GeandersonComponent', () => {
  let component: GeandersonComponent;
  let fixture: ComponentFixture<GeandersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeandersonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeandersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
