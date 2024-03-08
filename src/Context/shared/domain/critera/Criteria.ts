import { EmptyFilters, Filters } from './Filters';
import { Orders } from './Orders';

export class Criteria {
  readonly filters: Filters;
  readonly orders: Orders;
  readonly limit?: number;
  readonly offset?: number;

  constructor(filters: Filters, orders: Orders, limit?: number, offset?: number) {
    this.filters = filters;
    this.orders = orders;
    this.limit = limit;
    this.offset = offset;
  }

  public hasFilters(): boolean {
    return !this.filters.isEmpty();
  }

  public hasOrders(): boolean {
    return !this.orders.isEmpty();
  }

  serialize(): string {
    return `Criteria(${this.filters.serialize()},${this.orders.serialize()},${this.limit ?? '_'},${this.offset ?? '_'})`;
  }

  static empty(): Criteria {
    return new Criteria(new EmptyFilters(), Orders.none());
  }
}
