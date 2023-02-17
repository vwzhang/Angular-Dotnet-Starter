import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatgptUiComponent } from './chatgpt-ui.component';

describe('ChatgptUiComponent', () => {
  let component: ChatgptUiComponent;
  let fixture: ComponentFixture<ChatgptUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatgptUiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatgptUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
