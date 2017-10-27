import { Component } from '@angular/core';

@Component({
  selector: 'app-404',
  template: `
    <main class="page">
      <div class="container">
        <h4>Página não encontrada!</h4>
        <div>Voltar para a <a routerLink="/">home</a>.</div>
      </div>
    </main>
  `
})
export class PageNotFoundComponent { }
