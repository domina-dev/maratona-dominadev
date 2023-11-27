import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JonatasComponent } from './jonatas.component';

describe('JonatasComponent', () => {
  let component: JonatasComponent;
  let fixture: ComponentFixture<JonatasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JonatasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JonatasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
