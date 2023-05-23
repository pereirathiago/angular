import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent {
  @Input() valor: number = 0
  
  @Output() mudouValor = new EventEmitter()

  @ViewChild('campoInput', { static: true }) campoValorInput!: ElementRef;

  incrementa(){
    // this.valor++
    this.campoValorInput.nativeElement.value++
    this.mudouValor.emit({ novoValor: this.valor }) // emite um valor para o elemento pai
  }

  decrementa(){
    // this.valor--
    this.campoValorInput.nativeElement.value--
    this.mudouValor.emit({ novoValor: this.valor })
  }
}
