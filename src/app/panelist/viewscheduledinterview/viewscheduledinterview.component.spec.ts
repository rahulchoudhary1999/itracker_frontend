import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewscheduledinterviewComponent } from './viewscheduledinterview.component';

describe('ViewscheduledinterviewComponent', () => {
  let component: ViewscheduledinterviewComponent;
  let fixture: ComponentFixture<ViewscheduledinterviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewscheduledinterviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewscheduledinterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
