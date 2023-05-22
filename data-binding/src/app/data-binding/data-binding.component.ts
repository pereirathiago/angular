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

  getValor() {
    return 1
  }

  getCurtirCurso(){
    return true
  }

}
