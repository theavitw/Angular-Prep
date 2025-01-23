import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.css']
})
export class StructuralDirectivesComponent implements OnInit {
  public displayName = "Avit";
  public users = {
    "users": [
      { id: 1, name: 'Avit', age: 25 },
      { id: 2, name: 'Rahul', age: 26 },
      { id: 3, name: 'Raj', age: 27 },
      { id: 4, name: 'Rohit', age: 28 },
      { id: 5, name: 'Ravi', age: 29 }
    ],
    color: ["red", { id: 10, name: "Blue" }]
  }
  constructor() { }

  ngOnInit(): void {
  }
  public getId(value: any): string {
    return typeof value === 'string' ? value : value?.id;
  }

}
