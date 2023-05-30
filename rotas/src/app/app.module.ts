import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
// import { CursosComponent } from './cursos/cursos.component';
// import { routing } from './app.routing';
// import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
// import { CursosService } from './cursos/cursos.service';
// import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';
import { AppRoutingModule } from './app.routing.module';
import { FormsModule } from '@angular/forms';
import { AuthService } from './login/auth.service';
import { AuthGuard } from './guard/auth.guard';
import { CursosGuard } from './guard/cursos.guard';
import { AlunosGuard } from './guard/alunos.guard';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
// import { CursosModule } from './cursos/cursos.module';
// import { AlunosModule } from './alunos/alunos.module';
// import { AlunosComponent } from './alunos/alunos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PaginaNaoEncontradaComponent,
    // AlunosComponent,
    // CursosComponent,
    // CursoDetalheComponent,
    // CursoNaoEncontradoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // CursosModule,
    // AlunosModule,
    AppRoutingModule
  ],
  // providers: [CursosService],
  providers: [
    AuthService, 
    AuthGuard,
    CursosGuard,
    AlunosGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
