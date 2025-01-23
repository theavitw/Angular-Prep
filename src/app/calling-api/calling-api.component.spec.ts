import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallingApiComponent } from './calling-api.component';

describe('CallingApiComponent', () => {
  let component: CallingApiComponent;
  let fixture: ComponentFixture<CallingApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallingApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallingApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
