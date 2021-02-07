import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteRowWindowComponent } from './delete-row-window.component';

describe('NewTaskWindowComponent', () => {
  let component: DeleteRowWindowComponent;
  let fixture: ComponentFixture<DeleteRowWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteRowWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteRowWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
