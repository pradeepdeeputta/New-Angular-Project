import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TalenthireUsComponent } from './talenthire-us.component';

describe('TalenthireUsComponent', () => {
  let component: TalenthireUsComponent;
  let fixture: ComponentFixture<TalenthireUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalenthireUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalenthireUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
