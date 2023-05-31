import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {
  usuario: any = {
    nome: null,
    email: null
  }

  constructor(private http: HttpClient) { }

  onSubmit(form: NgForm) {
    console.log(form)
    // console.log(this.usuario)
  }

  verificaValidTouched(campo: any) {
    return !campo.valid && campo.touched
  }

  aplicaCssErro(campo: any) {
    return { 'is-invalid': this.verificaValidTouched(campo) }
  }

  consultaCEP(cep: string){
    cep = cep.replace (/\D/g, '');
 
    if (cep != null && cep !== '') {
      let validacep = /^[0-9]{8}$/;
 
      if (validacep.test(cep)){
     
        this.http.get(`//viacep.com.br/ws/${cep}/json/`)
          .pipe(map((dados: any) => dados))
          .subscribe(dados => console.log(dados));
      }
    }
  }
}
