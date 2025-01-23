import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective implements OnInit {
  @Input() myColor: string = '';

  constructor(private el: ElementRef) {
    this.el.nativeElement.addEventListener('submit', () => {
      this.onClick();
      console.log(this.myColor)
    });
  }

  onClick() {
    const children = this.el.nativeElement.children;
    for (let i = 0; i < children.length; i++) {
      children[i].style.backgroundColor = this.myColor; // Apply color to each child
    }
    console.log(children)
  }

  ngOnInit() {

    this.el.nativeElement.style.backgroundColor = this.myColor;
  }
}
