import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-handling',
  templateUrl: './form-handling.component.html',
  styleUrls: ['./form-handling.component.css']
})
export class FormHandlingComponent implements OnInit {
  public name: any = {};
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(data: Object) {
    this.name = data;
    console.log(data)
  }

}
