import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {
  public name = "Event Binding";
  constructor() { }

  ngOnInit(): void {
  }

  onClick(event: any) {
    event.target.style.padding = "10px";  
  }

}
