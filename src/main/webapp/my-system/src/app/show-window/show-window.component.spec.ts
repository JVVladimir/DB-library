import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowWindowComponent} from "./show-window.component";

describe('ShowWindowComponent', () => {
  let component: ShowWindowComponent;
  let fixture: ComponentFixture<ShowWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
