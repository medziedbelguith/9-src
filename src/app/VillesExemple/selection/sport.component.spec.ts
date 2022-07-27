import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { selectionComponent } from './selection.component';

describe('SportComponent', () => {
  let component:selectionComponent;
  let fixture: ComponentFixture<selectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ selectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(selectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
