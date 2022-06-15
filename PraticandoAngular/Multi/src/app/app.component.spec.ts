import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CalculadoraModule } from './calculadora/'
import { GerenciadorDeTarefasModule } from './gerenciador-de-tarefas/gerenciador-de-tarefas.module';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        CalculadoraModule,
        GerenciadorDeTarefasModule
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Calculadora'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Calculadora');
  });
});
