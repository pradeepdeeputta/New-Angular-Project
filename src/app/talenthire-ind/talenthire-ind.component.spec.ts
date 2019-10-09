import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TalenthireIndComponent } from './talenthire-ind.component';

describe('TalenthireIndComponent', () => {
  let component: TalenthireIndComponent;
  let fixture: ComponentFixture<TalenthireIndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalenthireIndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalenthireIndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
