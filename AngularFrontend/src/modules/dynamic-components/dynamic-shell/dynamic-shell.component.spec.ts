import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicShellComponent } from './dynamic-shell.component';

describe('DynamicShellComponent', () => {
  let component: DynamicShellComponent;
  let fixture: ComponentFixture<DynamicShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicShellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
