import { OrderBy } from './OrderBy'
import { OrderType, OrderTypes } from './OrderType'

export class Order {
  readonly _orderBy: OrderBy
  readonly _orderType: OrderType

  constructor (orderBy: OrderBy, orderType: OrderType) {
    this._orderBy = orderBy
    this._orderType = orderType
  }

  public orderBy (): string {
    return this._orderBy.value
  }

  public orderType (): string {
    return this._orderType.value
  }

  public static fromValues (orderBy?: string, orderType?: string): Order {
    if (orderBy === undefined || orderBy === '') {
      return Order.none()
    }

    return new Order(new OrderBy(orderBy), OrderType.fromValue(orderType ?? OrderTypes.ASC))
  }

  public static none (): Order {
    return new Order(new OrderBy(''), new OrderType(OrderTypes.NONE))
  }

  public static desc (orderBy: string): Order {
    return new Order(new OrderBy(orderBy), new OrderType(OrderTypes.DESC))
  }

  public static asc (orderBy: string): Order {
    return new Order(new OrderBy(orderBy), new OrderType(OrderTypes.ASC))
  }

  public hasOrder (): boolean {
    return !this._orderType.isNone()
  }

  public serialize (): string {
    return `[${this._orderBy.value}>>${this._orderType.value}]`
  }
}
