import { v4 as uuid } from 'uuid'
import validate from 'uuid-validate'

import { InvalidArgumentError } from '../InvalidArgumentError'
import { ValueObject } from './ValueObject'

export class Uuid extends ValueObject<string> {
  constructor (value: string) {
    super(value)
    this.ensureIsValidUuid(value)
  }

  /**
   * Create a random Uuid
   * @returns {Uuid} - A Uuid object
   */
  static random (): Uuid {
    return new Uuid(uuid())
  }

  /**
   * Ensures that the value is a valid Uuid of version 4
   * @param {string} id - Value to be checked
   * @private
   * @throws {InvalidArgumentError} If the value is not a valid Uuid of version 4
   */
  private ensureIsValidUuid (id: string): void {
    if (!validate(id)) {
      throw new InvalidArgumentError(`<${this.constructor.name}> does not allow the value <${id}>`)
    }
  }
}
