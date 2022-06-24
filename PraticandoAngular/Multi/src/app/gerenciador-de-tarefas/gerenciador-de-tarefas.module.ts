import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GerenciadorDeTarefasComponent } from './components/gerenciador-de-tarefas.component';
import { TarefasModule } from './tarefas/tarefas.module';

@NgModule({
  imports: [
    CommonModule,
    TarefasModule
  ],
  declarations: [
    GerenciadorDeTarefasComponent
  ],
  exports: [
    GerenciadorDeTarefasComponent
  ]
})
export class GerenciadorDeTarefasModule { }
