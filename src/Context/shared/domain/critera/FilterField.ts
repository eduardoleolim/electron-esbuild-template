import { InvalidArgumentError } from '../InvalidArgumentError'
import { StringValueObject } from '../value-object/StringValueObject'

export class FilterField extends StringValueObject {
  constructor (value: string) {
    super(value)
    this.ensureFieldIsNotEmpty(value)
  }

  private ensureFieldIsNotEmpty (value: string): void {
    if (value.trim() === '') {
      throw new InvalidArgumentError('Field must be defined')
    }
  }
}
