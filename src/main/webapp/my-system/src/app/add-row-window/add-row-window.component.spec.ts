import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRowWindowComponent } from './add-row-window.component';

describe('SvobodTaskWindowComponent', () => {
  let component: AddRowWindowComponent;
  let fixture: ComponentFixture<AddRowWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRowWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRowWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
