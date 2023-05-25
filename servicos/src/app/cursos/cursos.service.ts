import { Injectable } from "@angular/core";

@Injectable()
export class CursosService {

  getCursos() {
    return ['Curso 1', 'Curso 2', 'Curso 3']
  }
}