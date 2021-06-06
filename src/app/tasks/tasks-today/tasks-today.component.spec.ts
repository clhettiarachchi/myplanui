import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksTodayComponent } from './tasks-today.component';

describe('TasksTodayComponent', () => {
  let component: TasksTodayComponent;
  let fixture: ComponentFixture<TasksTodayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TasksTodayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
