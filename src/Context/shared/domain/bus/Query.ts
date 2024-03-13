export abstract class Query {}

export interface Response {}

export interface QueryBus {
  ask: <R extends Response>(query: Query) => Promise<R>
}

export interface QueryHandler<Q extends Query, R extends Response> {
  handle: (query: Q) => Promise<R>
}

export class QueryNotRegisteredError extends Error {
  constructor (query: Query) {
    super(`The query <${query.constructor.name}> hasn't a query handler associated`)
  }
}
