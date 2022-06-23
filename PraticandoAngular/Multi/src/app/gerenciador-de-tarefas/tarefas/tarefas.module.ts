import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefaService } from './shared';
import { ListarTarefaComponent } from './listar/listar-tarefa.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations:[
    ListarTarefaComponent
  ],
  providers: [
    TarefaService
    //importando via provider o servico de tarefas
  ]
})
export class TarefasModule { }
