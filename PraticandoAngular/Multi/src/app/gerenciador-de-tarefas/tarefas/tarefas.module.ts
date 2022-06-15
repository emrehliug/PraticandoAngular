import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefaService } from './shared';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    TarefaService
    //importando via provider o servico de tarefas
  ]
})
export class TarefasModule { }
