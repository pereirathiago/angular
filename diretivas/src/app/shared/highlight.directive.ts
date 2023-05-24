import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective implements OnInit {

  @Input() defaultColor: string = 'white'
  @Input('highlight') highlightColor: string = 'yellow'

  constructor() { }
  
  @HostBinding('style.backgroundColor') backgroundColor: string | undefined
  
  @HostListener('mouseenter') onMouseOver(){
    this.backgroundColor = this.highlightColor
  }
  
  @HostListener('mouseleave') onMouseLeave(){
    this.backgroundColor = this.defaultColor
  }

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor
  }
}
