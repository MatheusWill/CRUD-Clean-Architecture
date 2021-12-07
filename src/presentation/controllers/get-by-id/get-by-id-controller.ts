import {
  HttpRequest,
  HttpResponse,
  Controller,
  GetAccountById,
  Validation,
} from './get-by-id-controller-protocols'
import { serverError, ok, notFound } from '../../helpers/http/http-helper'

export class GetByIdController implements Controller {

  constructor(
    private readonly getAccountById: GetAccountById,
    private readonly validation: Validation,
  ) { }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {

      const error = this.validation.validate(httpRequest.params)
      if (error) return notFound(error)

      const { id } = httpRequest.params

      const account = await this.getAccountById.getById(id)
      
      return ok(account)

    } catch (error) {
      switch (error.message) {
        case 'ID_NOT_EXISTING':
          return notFound(error)
        default:
          return serverError()
      }
    }
  }

}