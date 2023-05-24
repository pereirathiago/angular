import { Component } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  templateUrl: './ngclass.component.html',
  styleUrls: ['./ngclass.component.scss']
})
export class NgclassComponent {
  meuFavorito: boolean = false

  onClick() {
    this.meuFavorito = !this.meuFavorito
  }
}
