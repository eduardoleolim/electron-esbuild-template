import { InvalidArgumentError } from '../value-object/InvalidArgumentError';
import { FilterField } from './FilterField';
import { FilterOperator, Operator } from './FilterOperator';
import { FilterValue } from './FilterValue';

export class Filter {
  private readonly _field: FilterField;
  private readonly _operator: FilterOperator;
  private readonly _value: FilterValue;

  constructor(field: FilterField, operator: FilterOperator, value: FilterValue) {
    this._field = field;
    this._operator = operator;
    this._value = value;
  }

  public field() : string {
    return this._field.value;
  }

  public operator(): Operator {
    return this._operator.value;
  }

  public value(): string {
    return this._value.value;
  }

  public serialize(): string {
    return `<${this._field.value}${this._operator.value}${this._value.value}>`;
  }

  public static fromValues(values: Map<string, string>): Filter {
    const field = values.get('field');
    const operator = values.get('operator');
    const value = values.get('value');

    if (!field || !operator || !value) {
      throw new InvalidArgumentError(`The filter is invalid`);
    }

    return new Filter(new FilterField(field), FilterOperator.fromValue(operator), new FilterValue(value));
  }
}
