import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  public todoList: Array<any>;
  public todoItem: any;
  public flag: boolean;

  constructor(private todoService: TodoService) {
    //console.log("Error!");
    //todoService.get().subscribe((data: any) => this.todoList = data);
    //this.todoItem = this.setInitialValuesForTodoList();
  }


  ngOnInit(): void {
    this.todoService.get().subscribe((data: any) => {
      this.todoList = data;
      console.log(data);
    },
    error=>{ 
  
    })  ;
    this.todoItem = this.setInitialValuesForTodoList();
  }

  private setInitialValuesForTodoList() {
    return {
      ItemId: undefined,
      ItemName: '',
      IsDone: false
    }
  }

  public createOrUpdateItem = (item: any) => {

    let findId;
    //itemId = _.find(this.todoList, ((el: { id: any; }) => el.id === item.ItemId));
    findId = this.todoList.find(el=> el.itemId === item.itemId)

    if (findId) {
      const updateIndex = _.findIndex(this.todoList, { itemId: findId.itemId });
      console.log(findId, updateIndex);
      this.todoService.update(item).subscribe(
        itemRecord => {
          this.todoList.splice(updateIndex, 1, item)
          this.flag = false;
        });

    } else {
      this.todoService.add(item).subscribe(
        itemRecord => {
          this.todoService.get().subscribe((data: any) => {
            this.todoList = data;
            console.log(data);
          },
            error => {

            });
          this.flag = false;
        });
    }

    this.todoItem = this.setInitialValuesForTodoList();

  };

  public editClicked = (record: any) => {
    this.todoItem = record;
    this.flag = true;
  };

  public newClicked = () => {
    this.todoItem = this.setInitialValuesForTodoList();
  };

  public deleteClicked(record: any) {
    console.log(record,2);
    const deleteIndex = _.findIndex(this.todoList, { itemId: record.itemId });
    this.todoService.remove(record).subscribe(
      result => this.todoList.splice(deleteIndex, 1)
    );

  }
}
