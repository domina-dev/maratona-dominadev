import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuilhermeComponent } from './guilherme.component';

describe('GuilhermeComponent', () => {
  let component: GuilhermeComponent;
  let fixture: ComponentFixture<GuilhermeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuilhermeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuilhermeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
