export class NotFoundError extends Error {
  constructor() {
    super('NotFound')
    this.name = 'NotFoundError'
  }
}