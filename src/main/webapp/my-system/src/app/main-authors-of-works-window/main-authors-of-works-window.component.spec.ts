import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {MainBookWindowComponent} from "../main-book-window/main-book-window.component";



describe('MainWindowComponent', () => {
  let component: MainBookWindowComponent;
  let fixture: ComponentFixture<MainBookWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainBookWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainBookWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
