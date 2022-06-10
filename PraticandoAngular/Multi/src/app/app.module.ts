import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { AppComponent } from './app.component';
import { NavComponent } from './shared/nav/nav.component';
import { CalculadoraModule } from './calculadora';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
     ],
  imports: [
    BrowserModule,
    TooltipModule,
    CalculadoraModule,
    IonicModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
