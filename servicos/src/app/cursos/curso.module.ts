import { NgModule } from '@angular/core';
import { CursosService } from './cursos.service';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';

@NgModule({
  declarations: [
    CursosComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [CursosComponent],
  // providers: [CursosService]
})
export class CursosModule { }
