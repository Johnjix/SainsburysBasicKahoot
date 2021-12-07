import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateQuestionsModalComponent } from './update-questions-modal.component';

describe('UpdateQuestionsModalComponent', () => {
  let component: UpdateQuestionsModalComponent;
  let fixture: ComponentFixture<UpdateQuestionsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateQuestionsModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateQuestionsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
