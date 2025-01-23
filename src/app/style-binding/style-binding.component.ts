import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.css']
})
export class StyleBindingComponent implements OnInit {
  color = {
    color: 'red',
    'font-weight': 'bold',
    'font-size': '20px'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
