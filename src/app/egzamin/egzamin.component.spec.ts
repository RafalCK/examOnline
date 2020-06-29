import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EgzaminComponent } from './egzamin.component';

describe('EgzaminComponent', () => {
  let component: EgzaminComponent;
  let fixture: ComponentFixture<EgzaminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EgzaminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EgzaminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
