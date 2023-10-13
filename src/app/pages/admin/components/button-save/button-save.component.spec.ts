import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonSaveComponent } from './button-save.component';

describe('ButtonSaveComponent', () => {
  let component: ButtonSaveComponent;
  let fixture: ComponentFixture<ButtonSaveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonSaveComponent]
    });
    fixture = TestBed.createComponent(ButtonSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
