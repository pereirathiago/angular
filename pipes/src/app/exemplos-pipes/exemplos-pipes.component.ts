import { Component } from '@angular/core';
import { Observable, interval, map } from 'rxjs';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent {
  livro: any = {
    titulo: 'Learning JavaScript Data Structures and Algorithms 2nd ed',
    rating: 4.54321,
    numeroPaginas: 314,
    preco: 44.99,
    dataLancamento: new Date(2016, 5, 23),
    url: 'http://a.co/glqjpRP'
  }

  livros: string[] = ['Java', 'Angular 2']

  filtro?: string

  addCurso(valor: string) {
    this.livros.push(valor)
  }

  obterCursos() {
    if (this.livros.length === 0 || this.filtro === undefined || this.filtro.trim() === '') {
      return this.livros;
    }

    let filter = this.filtro.toLocaleString().toLowerCase();
    return this.livros.filter((v: string) => v.toLowerCase().includes(filter));
  }

  valorAsync = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Valor assincrono'), 2000)
  })

  valorAsync2 = interval(2000).pipe(map(valor => 'Valor assíncrono 2'));
}
