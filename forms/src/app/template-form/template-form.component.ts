import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {
  usuario: any = {
    nome: 'Thiago',
    email: 'thiago@gmail.com'
  }

  onSubmit(form: NgForm) {
    console.log(form)
    console.log(this.usuario)
  }
}
