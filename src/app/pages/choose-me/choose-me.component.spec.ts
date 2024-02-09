import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseMeComponent } from './choose-me.component';

describe('ChooseMeComponent', () => {
  let component: ChooseMeComponent;
  let fixture: ComponentFixture<ChooseMeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChooseMeComponent]
    });
    fixture = TestBed.createComponent(ChooseMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
