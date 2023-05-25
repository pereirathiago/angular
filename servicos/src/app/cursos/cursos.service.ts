import { EventEmitter, Injectable } from "@angular/core";

@Injectable()
export class CursosService {

  emitirCursoCriado = new EventEmitter<String>()
  static criouNovoCurso = new EventEmitter<string>()

  private cursos: string[] = ['Curso 1', 'Curso 2', 'Curso 3']

  constructor() {
    console.log('CursosService')
  }

  getCursos() {
    return this.cursos
  }

  addCurso(curso: string) {
    this.cursos.push(curso)
    this.emitirCursoCriado.emit(curso)
    CursosService.criouNovoCurso.emit(curso)
  }
}