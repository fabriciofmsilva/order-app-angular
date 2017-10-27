import { routes } from './app.routing';

import { PageNotFoundComponent } from './page-not-found.component';

describe('router', () => {
  it('should contain a route for / that redirect to /orders', () => {
    expect(routes).toContain({ path: '', redirectTo: 'orders', pathMatch: 'full' });
  });

  it('should contain a route for /orders', () => {
    expect(routes).toContain({ path: 'orders', loadChildren: 'app/order/order.module#OrderModule' });
  });

  it('should contain a route for /not-found-page', () => {
    expect(routes).toContain({ path: '**', pathMatch: 'full', component: PageNotFoundComponent });
  });
});
