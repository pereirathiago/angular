import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlunosService } from '../alunos.service';
import { IFormCanDeactivate } from 'src/app/guard/i-form-candeactivate';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit, OnDestroy, IFormCanDeactivate {
  aluno: any = {}
  inscricao?: Subscription
  private formMudou: boolean = false

  constructor(
    private route: ActivatedRoute,
    private alunosService: AlunosService
  ) {}

  podeDesativar() {
    return this.podeMudarRota()
  }
  
  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id']
        this.aluno = this.alunosService.getAluno(id)

        if(this.aluno === null){
          this.aluno = {}
        }
      }
    )
  }

  ngOnDestroy(): void {
    this.inscricao?.unsubscribe()
  }

  onInput(){
    this.formMudou = true
    console.log('modou')
  }

  podeMudarRota() {
    if(this.formMudou){
      confirm('Tem certeza que deseja sair dessa página')
    }

    return true
  }

}
