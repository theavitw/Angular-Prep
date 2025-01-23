import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perent',
  templateUrl: './perent.component.html',
  styleUrls: ['./perent.component.css']
})
export class PerentComponent implements OnInit {
  public varData = "Avit";
  public arr = ["Avit", "Rahul", "Raj", "Rohit", "Ravi"];
  public obj = {
    "name": "Avit",
    "age": 22
  }

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.varData = this.varData === "TheAvitW" ? "Avit" : "TheAvitW";
  }

}
