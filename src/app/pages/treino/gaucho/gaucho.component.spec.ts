import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GauchoComponent } from './gaucho.component';

describe('GauchoComponent', () => {
  let component: GauchoComponent;
  let fixture: ComponentFixture<GauchoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GauchoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GauchoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
