import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactProejctionComponent } from './contact-proejction.component';

describe('ContactProejctionComponent', () => {
  let component: ContactProejctionComponent;
  let fixture: ComponentFixture<ContactProejctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactProejctionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactProejctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
