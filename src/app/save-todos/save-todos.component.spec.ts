import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveTodosComponent } from './save-todos.component';

describe('SaveTodosComponent', () => {
  let component: SaveTodosComponent;
  let fixture: ComponentFixture<SaveTodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveTodosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaveTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
