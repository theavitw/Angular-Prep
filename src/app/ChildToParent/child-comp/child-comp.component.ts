import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-comp',
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.css']
})
export class ChildCompComponent implements OnInit {
  @Output() public childEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  sendData() {
    this.childEvent.emit("Smaple Data");
  }

}
