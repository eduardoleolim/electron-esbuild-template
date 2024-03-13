import { InvalidArgumentError } from '../InvalidArgumentError'
import { StringValueObject } from '../value-object/StringValueObject'

export class FilterValue extends StringValueObject {
  constructor (value: string) {
    super(value)
    this.ensureValueIsNotEmpty(value)
  }

  private ensureValueIsNotEmpty (value: string): void {
    if (value.trim() === '') {
      throw new InvalidArgumentError('Value must be defined')
    }
  }
}
