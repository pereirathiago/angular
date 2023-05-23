import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  url: string = 'https://youtube.com'
  urlImage: string = 'https://cataas.com/cat'
  cursoAngular: boolean = true

  valorAtual: string = ''
  valorSalvo: string = ''

  isMouseOver: boolean = false

  getValor() {
    return 1
  }

  getCurtirCurso(){
    return true
  }

  botaoClicado(){
    alert("Botao clicado")
  }
  onKeyUp(evento: KeyboardEvent){
    this.valorAtual = (<HTMLInputElement>evento.target).value
  }
  salvarValor(valor: string){
    this.valorSalvo = valor
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver
  }

}
