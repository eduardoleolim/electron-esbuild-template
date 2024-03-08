import { ValueObject } from './ValueObject';

export class DateValueObject extends ValueObject<Date> {
  static now(): DateValueObject {
    return new DateValueObject(new Date(Date.now()));
  }

  public isAfter(other: DateValueObject): boolean {
    return this.value.getTime() > other.value.getTime();
  }

  public isBefore(other: DateValueObject): boolean {
    return this.value.getTime() < other.value.getTime();
  }
}
