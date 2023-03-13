import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicChoiceComponent } from './dynamic-choice.component';

describe('DynamicChoiceComponent', () => {
  let component: DynamicChoiceComponent;
  let fixture: ComponentFixture<DynamicChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicChoiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
