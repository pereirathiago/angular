import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent {
  @Input() valor: number = 0
  
  @Output() mudouValor = new EventEmitter()

  incrementa(){
    this.valor++
    this.mudouValor.emit({ novoValor: this.valor }) // emite um valor para o elemento pai
  }

  decrementa(){
    this.valor--
    this.mudouValor.emit({ novoValor: this.valor })
  }
}
