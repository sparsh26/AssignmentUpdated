import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { GetListComponent } from '../get-list/get-list.component';
import { TodoService } from '../todo.service';
import { YesNOPipe } from '../yes-no.pipe';

import { HomeComponent } from './home.component';

const todoServiceStub = {
  get: jasmine.createSpy('get').and.returnValue(of([
    {
      itemId: 1,
      itemName: 'abcd',
      isDone: true
    },
    {
      itemId: 2,
      itemName: 'efgh',
      isDone: false
    }
  ])),
  remove: jasmine.createSpy('remove').and.returnValue(of({}))
}
describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent, GetListComponent, YesNOPipe],
      providers: [
        {provide: TodoService, useValue: todoServiceStub}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should edit an item', () => {
    const record = {
      itemId: 1,
      itemName: 'abcd',
      isDone: true
    }
    component.editClicked(record);
    expect(component.flag).toBeTruthy();
  });
  it('should delete an item', () => {
    const record = {
      itemId: 1,
      itemName: 'abcd',
      isDone: true
    }
    component.deleteClicked(record);
    expect(component.todoList.length).toBe(1);
  });
});
