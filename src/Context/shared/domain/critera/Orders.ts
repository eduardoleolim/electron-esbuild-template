import { Order } from './Order';

export class Orders {
  readonly orders: Order[];

  constructor(orders: Order[]) {
    this.orders = orders;
  }

  public isEmpty(): boolean {
    return this.orders.length === 0;
  }

  serialize(): string {
    return `(${this.orders.map((order) => order.serialize()).join(',')})`;
  }

  static fromValues(orders: Array<Map<string, string>>): Orders {
    return new Orders(orders.map((value) => Order.fromValues(value.get('orderBy'), value.get('orderType'))));
  }

  static none(): Orders {
    return new Orders([Order.none()]);
  }
}
