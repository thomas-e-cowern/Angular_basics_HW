import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewoCompComponent } from './newo-comp.component';

describe('NewoCompComponent', () => {
  let component: NewoCompComponent;
  let fixture: ComponentFixture<NewoCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewoCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewoCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
