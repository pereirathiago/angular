import { EventEmitter, Injectable } from "@angular/core";
import { LogService } from "../shared/log.service";

@Injectable()
export class CursosService {

  emitirCursoCriado = new EventEmitter<String>()
  static criouNovoCurso = new EventEmitter<string>()

  private cursos: string[] = ['Curso 1', 'Curso 2', 'Curso 3']

  constructor(private logService: LogService) {
    console.log('CursosService')
  }

  getCursos() {
    this.logService.consoleLog('Obtendo lista de cursos')
    return this.cursos
  }

  addCurso(curso: string) {
    this.logService.consoleLog(`Criando um novo curso ${curso}`)
    this.cursos.push(curso)
    this.emitirCursoCriado.emit(curso)
    CursosService.criouNovoCurso.emit(curso)
  }
}