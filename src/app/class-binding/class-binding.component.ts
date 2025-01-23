import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.css'],
})
export class ClassBindingComponent implements OnInit {
  isClicked = false;
  getcolor = new Color(true);

  constructor() { }

  ngOnInit(): void { }

  omClick() {
    this.isClicked = !this.isClicked;
  }

  get clicked(): string {
    return this.isClicked ? 'size' : 'text';
  }

}

class Color {

  constructor(public color: boolean) {
    this.color = color;

  }

  getColor(flag: boolean): string {
    return flag ? 'text' : 'size';
  }
}
