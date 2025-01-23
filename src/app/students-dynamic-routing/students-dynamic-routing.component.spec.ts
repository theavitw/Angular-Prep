import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsDynamicRoutingComponent } from './students-dynamic-routing.component';

describe('StudentsDynamicRoutingComponent', () => {
  let component: StudentsDynamicRoutingComponent;
  let fixture: ComponentFixture<StudentsDynamicRoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsDynamicRoutingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentsDynamicRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
