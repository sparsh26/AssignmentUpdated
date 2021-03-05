import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-get-list',
  templateUrl: './get-list.component.html',
  styleUrls: ['./get-list.component.css']
})
    
export class GetListComponent implements OnInit {

  @Output() recordDeleted = new EventEmitter<any>();
  @Output() newClicked = new EventEmitter<any>();
  @Output() editClicked = new EventEmitter<any>();
  @Input() todoList: Array<any>;
  newItem: any;

  constructor() {  }

  ngOnInit(): void {
    this.newItem = this.setInitialValuesForTodoList();
  }

  private setInitialValuesForTodoList() {
    return {
      ItemId: undefined,
      ItemName: '',
      IsDone: false
    }
  }

  public deleteRecord(record: any) {
    this.recordDeleted.emit(record);
  }

  public editRecord(record: any) {
    const clonedRecord = Object.assign({}, record);
    this.editClicked.emit(clonedRecord);

  }

  public newRecord() {
    this.newClicked.emit();
  }

}
