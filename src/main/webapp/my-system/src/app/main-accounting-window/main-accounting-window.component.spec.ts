import {MainBookWindowComponent} from "../main-book-window/main-book-window.component";
import {async, ComponentFixture, TestBed} from "@angular/core/testing";


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
