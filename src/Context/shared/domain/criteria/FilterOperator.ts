import { InvalidArgumentError } from '../InvalidArgumentError'
import { EnumValueObject } from '../value-object/EnumValueObject'

export enum Operator {
  EQUAL = '=',
  NOT_EQUAL = '!=',
  GT = '>',
  GTE = '>=',
  LT = '<',
  LTE = '<=',
  CONTAINS = 'CONTAINS',
  NOT_CONTAINS = 'NOT_CONTAINS'
}

export class FilterOperator extends EnumValueObject<Operator> {
  constructor (value: Operator) {
    super(value, Object.values(Operator))
  }

  public static fromValue (value: string): FilterOperator {
    switch (value) {
      case Operator.EQUAL:
        return new FilterOperator(Operator.EQUAL)
      case Operator.NOT_EQUAL:
        return new FilterOperator(Operator.NOT_EQUAL)
      case Operator.GT:
        return new FilterOperator(Operator.GT)
      case Operator.GTE:
        return new FilterOperator(Operator.GTE)
      case Operator.LT:
        return new FilterOperator(Operator.LT)
      case Operator.LTE:
        return new FilterOperator(Operator.LTE)
      case Operator.CONTAINS:
        return new FilterOperator(Operator.CONTAINS)
      case Operator.NOT_CONTAINS:
        return new FilterOperator(Operator.NOT_CONTAINS)
      default:
        throw new InvalidArgumentError(`The filter operator ${value} is invalid`)
    }
  }

  public isPositive (): boolean {
    return this.value !== Operator.NOT_EQUAL && this.value !== Operator.NOT_CONTAINS
  }

  protected throwErrorForInvalidValue (value: Operator): void {
    throw new InvalidArgumentError(`The filter operator ${value} is invalid`)
  }
}
