import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelistViewComponent } from './panelist-view.component';

describe('PanelistViewComponent', () => {
  let component: PanelistViewComponent;
  let fixture: ComponentFixture<PanelistViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelistViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelistViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
