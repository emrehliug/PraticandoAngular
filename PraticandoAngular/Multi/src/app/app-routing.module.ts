import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CalculadoraComponent } from "./calculadora/components/calculadora.component";
import { GerenciadorDeTarefasComponent } from "./gerenciador-de-tarefas/components/gerenciador-de-tarefas.component";

export const routes: Routes = [
  { path: 'calculadora', component: CalculadoraComponent },
  { path: 'gerenciadordetarefas', component: GerenciadorDeTarefasComponent },
  { path: '', redirectTo: 'calculadora', pathMatch:'full' },
  { path: '**', redirectTo: 'calculadora', pathMatch:'full' }
];

@NgModule
({
  imports: [
     RouterModule.forRoot(routes)
    ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
