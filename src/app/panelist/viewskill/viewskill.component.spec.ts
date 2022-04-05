import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewskillComponent } from './viewskill.component';

describe('ViewskillComponent', () => {
  let component: ViewskillComponent;
  let fixture: ComponentFixture<ViewskillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewskillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewskillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
