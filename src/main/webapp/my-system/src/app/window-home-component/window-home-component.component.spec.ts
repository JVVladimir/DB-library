import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowHomeComponentComponent } from './window-home-component.component';

describe('WindowHomeComponentComponent', () => {
  let component: WindowHomeComponentComponent;
  let fixture: ComponentFixture<WindowHomeComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindowHomeComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindowHomeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
