import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { TarefaService } from './shared';
import { ListarTarefaComponent } from './listar/listar-tarefa.component';
import { CadastrarTarefaComponent } from './cadastrar/cadastrar-tarefa.component';
import { EditarTarefasComponent } from './editar/editar-tarefas.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations:[
    ListarTarefaComponent,
    CadastrarTarefaComponent,
    EditarTarefasComponent
  ],
  exports: [
    ListarTarefaComponent,
    CadastrarTarefaComponent,
    EditarTarefasComponent
  ],
  providers: [
    TarefaService
  ]
})
export class TarefasModule { }
