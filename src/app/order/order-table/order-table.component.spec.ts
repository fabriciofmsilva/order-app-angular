import { SimpleChange } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { OrderTableComponent } from './order-table.component';

const mockOrders = [
  {
    id: '3',
    value: '20',
    type: 'deposit',
    createdAt: 100
  },
  {
    id: '2',
    value: '15',
    type: 'deposit',
    createdAt: 50
  },
  {
    id: '1',
    value: '-15',
    type: 'withdraw',
    createdAt: 0
  }
];

describe('OrderTableComponent', () => {
  let component: OrderTableComponent;
  let fixture: ComponentFixture<OrderTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    console.log(component);
    expect(component).toBeTruthy();
  });

  it('should render total with R$0.00 when orders is an empty array', async() => {
    component.ngOnChanges({
      orders: new SimpleChange([], [], true)
    });

    const de = fixture.debugElement.query(By.css('#OrderTableTotal'));
    const el: HTMLElement = de.nativeElement;

    fixture.detectChanges();

    fixture.whenStable().then(() => {
      expect(el.textContent).toContain('R$0.00');
    });
  });

  it('should render total with calculed value when orders is not an empty array', async() => {
    component.ngOnChanges({
      orders: new SimpleChange([], [ ...mockOrders ], true)
    });

    const de = fixture.debugElement.query(By.css('#OrderTableTotal'));
    const el: HTMLElement = de.nativeElement;

    fixture.detectChanges();

    fixture.whenStable().then(() => {
      expect(el.textContent).toContain('R$20.00');
    });
  });
});
