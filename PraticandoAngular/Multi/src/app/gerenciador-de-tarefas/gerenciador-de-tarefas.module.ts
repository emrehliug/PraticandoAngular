import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GerenciadorDeTarefasComponent } from './components/gerenciador-de-tarefas.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    GerenciadorDeTarefasComponent
  ],
  exports: [
    GerenciadorDeTarefasComponent
  ]
})
export class GerenciadorDeTarefasModule { }
