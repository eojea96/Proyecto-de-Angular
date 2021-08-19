import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFirstComponent } from './form-first.component';

describe('FormFirstComponent', () => {
  let component: FormFirstComponent;
  let fixture: ComponentFixture<FormFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormFirstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
