import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";


import { CalculadoraComponent } from "./calculadora/components/calculadora.component";
import { GerenciadorDeTarefasComponent } from "./gerenciador-de-tarefas/components/gerenciador-de-tarefas.component";
import { TarefasRoutes } from "./gerenciador-de-tarefas/tarefas/tarefas-routing.module";

export const routes: Routes = [
  { path: 'calculadora', component: CalculadoraComponent },
  { path: 'gerenciadordetarefas', component: GerenciadorDeTarefasComponent },
  { path: '', redirectTo: 'calculadora', pathMatch:'full' },
  { path: '**', redirectTo: 'calculadora', pathMatch:'full' },
  ...TarefasRoutes
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
