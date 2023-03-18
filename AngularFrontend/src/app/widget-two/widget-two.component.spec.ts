import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetTwoComponent } from './widget-two.component';

describe('WidgetTwoComponent', () => {
  let component: WidgetTwoComponent;
  let fixture: ComponentFixture<WidgetTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
