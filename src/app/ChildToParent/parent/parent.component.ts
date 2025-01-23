import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  constructor() { }
  public msg: String = "";
  ngOnInit(): void {
  }

  onChildEvent(data: any) {
    this.msg = data;
  }



}
