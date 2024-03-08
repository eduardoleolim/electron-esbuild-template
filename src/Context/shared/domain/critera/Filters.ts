import { Filter } from './Filter';
import { Operator } from './FilterOperator';

enum FiltersOperator {
  AND,
  OR
}

export abstract class Filters {
  abstract isEmpty(): boolean;

  abstract serialize(): string;
}

export class EmptyFilters extends Filters {
  public isEmpty(): boolean {
    return true;
  }

  public serialize(): string {
    return '';
  }
}

export class SingleFilter extends Filters {
  readonly filter: Filter;

  constructor(filter: Filter) {
    super();
    this.filter = filter;
  }

  public isEmpty(): boolean {
    return false;
  }

  public serialize(): string {
    return this.filter.serialize();
  }

  static equal(field: string, value: string): SingleFilter {
    const map = new Map<string, string>();
    map.set('field', field);
    map.set('operator', Operator.EQUAL);
    map.set('value', value);

    return new SingleFilter(Filter.fromValues(map));
  }

  static notEqual(field: string, value: string): SingleFilter {
    const map = new Map<string, string>();
    map.set('field', field);
    map.set('operator', Operator.NOT_EQUAL);
    map.set('value', value);

    return new SingleFilter(Filter.fromValues(map));
  }

  static gt(field: string, value: string): SingleFilter {
    const map = new Map<string, string>();
    map.set('field', field);
    map.set('operator', Operator.GT);
    map.set('value', value);

    return new SingleFilter(Filter.fromValues(map));
  }

  static gte(field: string, value: string): SingleFilter {
    const map = new Map<string, string>();
    map.set('field', field);
    map.set('operator', Operator.GTE);
    map.set('value', value);

    return new SingleFilter(Filter.fromValues(map));
  }

  static lt(field: string, value: string): SingleFilter {
    const map = new Map<string, string>();
    map.set('field', field);
    map.set('operator', Operator.LT);
    map.set('value', value);

    return new SingleFilter(Filter.fromValues(map));
  }

  static lte(field: string, value: string): SingleFilter {
    const map = new Map<string, string>();
    map.set('field', field);
    map.set('operator', Operator.LTE);
    map.set('value', value);

    return new SingleFilter(Filter.fromValues(map));
  }

  static contains(field: string, value: string): SingleFilter {
    const map = new Map<string, string>();
    map.set('field', field);
    map.set('operator', Operator.CONTAINS);
    map.set('value', value);

    return new SingleFilter(Filter.fromValues(map));
  }

  static notContains(field: string, value: string): SingleFilter {
    const map = new Map<string, string>();
    map.set('field', field);
    map.set('operator', Operator.NOT_CONTAINS);
    map.set('value', value);

    return new SingleFilter(Filter.fromValues(map));
  }
}

export class MultipleFilters extends Filters {
  readonly filters: Filters[];
  readonly operator: FiltersOperator;

  constructor(filters: Filters[], operator: FiltersOperator) {
    super();
    this.filters = filters;
    this.operator = operator;
  }

  public isEmpty(): boolean {
    return this.filters.length === 0;
  }

  public serialize(): string {
    return `(${this.filters.map((filter) => filter.serialize()).join(this.operator === FiltersOperator.AND ? '&' : '|')})`;
  }
}

export class AndFilters extends MultipleFilters {
  constructor(filters: Filters[]) {
    super(filters, FiltersOperator.AND);
  }
}

export class OrFilters extends MultipleFilters {
  constructor(filters: Filters[]) {
    super(filters, FiltersOperator.OR);
  }
}
