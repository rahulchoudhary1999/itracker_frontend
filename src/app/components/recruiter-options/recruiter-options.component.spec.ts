import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterOptionsComponent } from './recruiter-options.component';

describe('RecruiterOptionsComponent', () => {
  let component: RecruiterOptionsComponent;
  let fixture: ComponentFixture<RecruiterOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecruiterOptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruiterOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
