import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() public title: String = "";
  @Input() public varValue: String = "";
  @Input() public arr: string[] = [];
  @Input() public obj: any = {};

  constructor() { }

  ngOnInit(): void {
  }

}
