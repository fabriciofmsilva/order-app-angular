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
  const defaultSort = {
    by: 'createdAt',
    up: false
  };
  let component: OrderTableComponent;

  beforeEach(() => {
    component = new OrderTableComponent();
  });

  it('should create with default values', () => {
    expect(component.orders).toBe(undefined);
    expect(component.total).toBe(undefined);
    expect(component.sort).toEqual(defaultSort);
  });

  describe('onOrderRemove', () => {
    it(`should send correctly id`, () => {
      let id = null;
      component.removeOrder.subscribe(currentId => id = currentId);

      component.onOrderRemove('1');

      expect(id).toBe('1');
    });
  });

  describe('getOrderType', () => {
    it(`should return 'Saque' when param is 'withdraw'`, () => {
      const result = component.getOrderType('withdraw');

      expect(result).toBe('Saque');
    });

    it(`should return 'Depósito' when param is not 'withdraw'`, () => {
      const result = component.getOrderType('bla');

      expect(result).toBe('Depósito');
    });
  });

  describe('setSort', () => {
    it(`should set 'sort.by' with 'type' and don't change 'sort.up'`, () => {
      component.sort = { ...defaultSort };

      const result = {
        by: 'type',
        up: false
      };
      component.setSort(result.by);

      expect(component.sort).toEqual(result);
    });

    it(`should reverse 'sort.up' and don't change 'sort.by'`, () => {
      component.sort = { ...defaultSort };

      const result = {
        by: 'createdAt',
        up: true
      };
      component.setSort(result.by);

      expect(component.sort).toEqual(result);
    });
  });

  describe('getTotal', () => {
    it(`should set 'sort.by' with 'type' and don't change 'sort.up'`, () => {
      const total = component.getTotal(mockOrders);

      expect(total).toEqual(20);
    });
  });
});
