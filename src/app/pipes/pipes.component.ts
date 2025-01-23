import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  public date = new Date();
  public users = {
    "name": "Avit",
    "age": 22,
    "city": "Pune"
  };
  constructor() { }

  ngOnInit(): void {
  }

}
