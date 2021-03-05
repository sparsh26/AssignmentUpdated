import { Component, OnInit,EventEmitter,Input,Output } from '@angular/core';

@Component({
  selector: 'app-create-or-update-item',
  templateUrl: './create-or-update-item.component.html',
  styleUrls: ['./create-or-update-item.component.css']
})
export class CreateOrUpdateItemComponent implements OnInit {

  @Output() listCreated = new EventEmitter<any>();
  @Input() itemInfo: any;

  public buttonText = 'Save';

  constructor() {
    this.clearItemInfo();
    console.log(this.itemInfo.ItemName);
  }


  ngOnInit(): void {
  }

  private clearItemInfo = () =>{
    this.itemInfo = {
      ItemId: undefined,
      ItemName: '',
      IsDone: false,
    };
  };

  public createOrUpdateRecord = (event: any) => {
    console.log(this.itemInfo,1);
    this.listCreated.emit(this.itemInfo);
    //this.clearItemInfo();
  };

}
