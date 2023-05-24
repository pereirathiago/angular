import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {
  
  constructor(
    // private _elementRef: ElementRef, 
    // private _renderer: Renderer2
  ) { }

  // @HostBinding('style.backgroundColor') backgroundColor: string | undefined

  private backgroundColor!: string;
  @HostBinding('style.backgoundColor') get setColor(){
    return this.backgroundColor
  }

  @HostListener('mouseenter') onMouseOver(){
    // this._renderer.setStyle(this._elementRef.nativeElement, 'background-color', 'yellow') 
    this.backgroundColor = 'yellow'
  }

  @HostListener('mouseleave') onMouseLeave(){
    // this._renderer.setStyle(this._elementRef.nativeElement, 'background-color', 'white') 
    this.backgroundColor = 'white'
  }


}
