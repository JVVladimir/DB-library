import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRowWindowComponent } from './edit-row-window.component';

describe('ExitTaskWindowComponent', () => {
  let component: EditRowWindowComponent;
  let fixture: ComponentFixture<EditRowWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditRowWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRowWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
