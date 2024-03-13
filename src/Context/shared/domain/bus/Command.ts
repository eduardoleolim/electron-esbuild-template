export abstract class Command {}

export interface CommandBus {
  dispatch: (command: Command) => Promise<void>
}

export interface CommandHandler<T extends Command> {
  handle: (command: T) => Promise<void>
}

export class CommandNotRegisteredError extends Error {
  constructor (command: Command) {
    super(`The command <${command.constructor.name}> hasn't a command handler associated`)
  }
}
