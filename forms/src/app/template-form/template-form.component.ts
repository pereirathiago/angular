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

  consultaCEP(cep: string, f: any){
    cep = cep.replace (/\D/g, '')
 
    if (cep != null && cep !== '') {
      let validacep = /^[0-9]{8}$/
 
      if (validacep.test(cep)){

        this.resetDadosForm(f)
     
        this.http.get(`//viacep.com.br/ws/${cep}/json/`)
          .pipe(map((dados: any) => dados))
          .subscribe(dados => this.popularDadosForm(dados, f))
      }
    }
  }

  popularDadosForm(dados: any, form: any) {
    // form.setValue({
    //   nome: form.value.nome,
    //   email: form.value.email,
    //   endereco: {
    //     rua: dados.logradouro,
    //     cep: dados.cep,
    //     numero: '',
    //     complemento: dados.complemento,
    //     bairro: dados.bairro,
    //     cidade: dados.localidade,
    //     estado: dados.uf
    //   }
    // })

    form.form.patchValue({
      endereco: {
        rua: dados.logradouro,
        cep: dados.cep,
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    })
  }

  resetDadosForm(form: any) {
    form.form.patchValue({
      endereco: {
        rua: null,
        cep: null,
        complemento: null,
        bairro: null,
        cidade: null,
        estado: null
      }
    })
  }
}
